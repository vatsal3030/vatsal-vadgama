/**
 * Vatsal Vadgama — Software Engineer Portfolio
 * Interactive WebGL Three.js Particle Portrait & Scroll Dispersion Scene
 *
 * Architecture:
 * 1. Samples high-contrast editorial portrait into ~70k-90k 3D points.
 * 2. Rest state: pristine stippled photographic point cloud with gentle organic breathing
 *    and subtle interactive pointer parallax.
 * 3. On scroll down: progressive dispersion shockwave where particles scatter outward in
 *    wavy horizontal bands, catching warm amber spark highlights before fading into black space.
 * 4. On scroll up: seamless re-convergence back into the sharp portrait.
 * 5. Motion Off / prefers-reduced-motion: clean fallback to static photo with 0% overhead.
 */

(function () {
  const canvas = document.querySelector(".hero-canvas");
  const portrait = document.querySelector(".hero-fallback");
  const sceneEl = document.querySelector(".hero-scene");
  const heroEl = document.querySelector(".hero");

  if (!canvas || !portrait || !sceneEl || !heroEl) return;

  const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  function isMotionActive() {
    return !reducedMotionMedia.matches && !document.documentElement.classList.contains("motion-off");
  }

  // Pointer normalized coordinates (-1 to 1)
  const pointer = { x: 0, y: 0, active: false };
  let animId = 0;
  let renderer = null;
  let scene = null;
  let camera = null;
  let material = null;
  let points = null;
  let clock = null;
  let isReady = false;

  function initThree() {
    if (typeof window.THREE === "undefined") {
      setTimeout(initThree, 100);
      return;
    }

    try {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || 720;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0, 0, 6);

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: false,
        powerPreference: "low-power"
      });

      const dpr = Math.min(window.devicePixelRatio || 1, finePointer.matches ? 1.75 : 1.25);
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(dpr);

      clock = new THREE.Clock();

      buildParticleSystem();
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to static portrait:", err);
      portrait.classList.remove("is-covered");
      portrait.style.opacity = "1";
    }
  }

  function buildParticleSystem() {
    const sampleImg = new Image();
    sampleImg.crossOrigin = "anonymous";
    sampleImg.src = portrait.currentSrc || portrait.src || "assets/vatsal-signal-840.webp";

    sampleImg.onload = () => {
      try {
        const gridW = window.innerWidth < 700 ? 180 : 300;
        const gridH = Math.round(1.25 * gridW);

        const sampleCanvas = document.createElement("canvas");
        sampleCanvas.width = gridW;
        sampleCanvas.height = gridH;

        const ctx = sampleCanvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(sampleImg, 0, 0, gridW, gridH);
        const imgData = ctx.getImageData(0, 0, gridW, gridH).data;

        const positions = [];
        const colors = [];
        const seeds = [];

        for (let y = 0; y < gridH; y += 1) {
          for (let x = 0; x < gridW; x += 1) {
            const idx = (y * gridW + x) * 4;
            const alpha = imgData[idx + 3] / 255;
            const r = imgData[idx];
            const g = imgData[idx + 1];
            const b = imgData[idx + 2];
            const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

            // Discard transparent background and dark pixels - points on body/face only
            if (alpha < 0.25 || lum < 0.04) continue;

            // Organic sub-pixel jitter to prevent rigid Cartesian grid dithering
            const jx = (Math.random() - 0.5) * (0.8 / gridW) * 0.95;
            const jy = (Math.random() - 0.5) * (1.0 / gridH) * 0.95;

            // Coordinates in normalized Three.js space
            positions.push((x / gridW - 0.5) * 0.8 + jx, 0.5 - y / gridH + jy, 0.025 * lum);
            colors.push(r / 255, g / 255, b / 255);
            seeds.push(((127 * x + 311 * y) % 997) / 997);
          }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute("aColor", new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));

        const vertexShader = `
          attribute vec3 aColor;
          attribute float aSeed;
          uniform float uTime;
          uniform float uProgress;
          uniform float uScale;
          uniform float uDpr;
          uniform float uDotsAlpha;
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            float p = smoothstep(0.04, 0.85, uProgress);
            // Smooth continuous wavy dispersion matching reference site
            vec3 target = vec3(
              (aSeed - 0.5) * 3.4,
              sin(aSeed * 22.0 + position.x * 6.28) * 0.12 + (position.y - 0.1) * 0.45,
              sin(aSeed * 14.0) * 0.14
            );
            vec3 pos = mix(position, target, p);
            float edge = smoothstep(0.18, 0.5, abs(position.x));
            pos.x += sin(uTime * 0.35 + aSeed * 40.0) * 0.008 * (edge + p);
            pos.z += sin(aSeed * 64.0 + uTime * 0.25) * 0.015;
            vec4 mv = modelViewMatrix * vec4(pos * uScale, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = (1.5 + dot(aColor, vec3(0.299, 0.587, 0.114)) * 1.3) * uDpr;
            // Warm amber spark hue on dispersion
            vColor = mix(aColor, vec3(1.0, 0.46, 0.20), p * 0.6);
            // Full head and collar remain intact without harsh boundary clipping
            vAlpha = uDotsAlpha * (1.0 - p * 0.42);
          }
        `;

        const fragmentShader = `
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            float alpha = smoothstep(0.5, 0.26, d) * vAlpha;
            if (alpha < 0.01) discard;
            gl_FragColor = vec4(vColor * 1.25, alpha);
          }
        `;

        const dpr = Math.min(window.devicePixelRatio || 1, finePointer.matches ? 1.75 : 1.25);
        material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          transparent: true,
          depthWrite: false,
          uniforms: {
            uTime: { value: 0 },
            uProgress: { value: 0 },
            uScale: { value: 1 },
            uDpr: { value: dpr },
            uDotsAlpha: { value: 0 }
          }
        });

        points = new THREE.Points(geometry, material);
        scene.add(points);

        isReady = true;
        updateScale();

        if (isMotionActive()) {
          portrait.style.opacity = "1";
          startAnimation();
        } else {
          portrait.style.opacity = "1";
        }
      } catch (err) {
        console.warn("Failed to build particle mesh:", err);
      }
    };
  }

  function updateScale() {
    if (!renderer || !camera || !material || !canvas) return;
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || 720;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    const dpr = Math.min(window.devicePixelRatio || 1, finePointer.matches ? 1.75 : 1.25);
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(dpr);
    material.uniforms.uDpr.value = dpr;

    // Visible vertical span at distance 6 with FOV 42:
    const visibleFrustumHeight = 2 * Math.tan((42 * Math.PI) / 360) * 6; // ≈ 4.60
    
    // Scale portrait to comfortable editorial height (~540px):
    const targetPixelHeight = Math.min(540, height * 0.78);
    material.uniforms.uScale.value = visibleFrustumHeight * (targetPixelHeight / height);

    // Position head comfortably above center so entire face, neck and collar are unblocked:
    const headOffsetYFactor = 0.115;
    if (points) {
      points.position.y = visibleFrustumHeight * headOffsetYFactor;
    }

    // Align base photo to the exact sub-pixel position & dimensions of the Three.js mesh:
    if (portrait) {
      const meshHeight = targetPixelHeight;
      const meshWidth = targetPixelHeight * 0.8; // Aspect ratio of vatsal-signal.webp (1000/1250)
      // Canvas is positioned at top: -20px relative to .hero-decoration
      const meshCenterYInDeco = -20 + (height / 2) - (headOffsetYFactor * height);
      const meshTopInDeco = meshCenterYInDeco - (meshHeight / 2);

      portrait.style.position = "absolute";
      portrait.style.left = "50%";
      portrait.style.transform = "translateX(-50%)";
      portrait.style.top = `${meshTopInDeco}px`;
      portrait.style.width = `${meshWidth}px`;
      portrait.style.height = `${meshHeight}px`;
      portrait.style.objectFit = "contain";
      portrait.style.objectPosition = "center center";
      portrait.style.zIndex = "1";
    }
  }

  function getScrollProgress() {
    return Math.min(1, Math.max(0, window.scrollY / 700));
  }

  function renderFrame() {
    if (!isReady || !renderer || !scene || !camera || !material || !points) return;

    if (!isMotionActive() || document.hidden) {
      animId = 0;
      return;
    }

    animId = requestAnimationFrame(renderFrame);

    const delta = Math.min(clock.getDelta(), 0.1);
    const elapsed = clock.getElapsedTime();

    const targetProgress = getScrollProgress();
    material.uniforms.uProgress.value = THREE.MathUtils.damp(
      material.uniforms.uProgress.value,
      targetProgress,
      4.0,
      delta
    );
    const p = material.uniforms.uProgress.value;
    material.uniforms.uTime.value = elapsed;

    // Sequence:
    // At scroll = 0 (p = 0):
    // - Dots are invisible (uDotsAlpha = 0)
    // - Clean real portrait photo is 100% visible (opacity = 1)
    // On scroll:
    // - Dots emerge smoothly between p = 0.01 and 0.18
    // - Base photo stays softly visible underneath (~0.35) so it NEVER drops to a blank void!
    // - Particles disperse wide in wavy bands across p = 0.20 to 0.90
    // - Incoming opaque section (.signal-strip) slides up like a curtain and covers the hero
    const dotsAlpha = THREE.MathUtils.clamp((p - 0.01) / 0.18, 0, 1);
    material.uniforms.uDotsAlpha.value = dotsAlpha;

    if (portrait) {
      const photoOpacity = 1 - THREE.MathUtils.clamp((p - 0.08) / 0.65, 0, 0.65);
      portrait.style.opacity = photoOpacity.toFixed(3);
    }

    // Interactive pointer parallax
    if (finePointer.matches && pointer.active) {
      points.rotation.y = THREE.MathUtils.damp(points.rotation.y, pointer.x * 0.024, 3.2, delta);
      points.rotation.x = THREE.MathUtils.damp(points.rotation.x, -pointer.y * 0.016, 3.2, delta);
    } else {
      points.rotation.y = THREE.MathUtils.damp(points.rotation.y, 0, 2.5, delta);
      points.rotation.x = THREE.MathUtils.damp(points.rotation.x, 0, 2.5, delta);
    }

    renderer.render(scene, camera);
  }

  function startAnimation() {
    if (!animId && isMotionActive() && !document.hidden) {
      if (clock) clock.start();
      animId = requestAnimationFrame(renderFrame);
    }
  }

  function stopAnimation() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = 0;
    }
    if (renderer && scene && camera) {
      renderer.clear();
    }
  }

  function handleMotionChange() {
    const active = isMotionActive();
    if (active) {
      if (canvas) canvas.style.display = "block";
      portrait.classList.add("is-covered");
      portrait.style.opacity = "0";
      startAnimation();
    } else {
      stopAnimation();
      if (canvas) canvas.style.display = "none";
      portrait.classList.remove("is-covered");
      portrait.style.opacity = "1";
    }
  }

  // Event Listeners
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThree);
  } else {
    initThree();
  }

  new ResizeObserver(() => {
    updateScale();
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }).observe(sceneEl);

  window.addEventListener(
    "scroll",
    () => {
      if (!animId && isMotionActive()) {
        startAnimation();
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.active = true;
      if (!animId && isMotionActive()) {
        startAnimation();
      }
    },
    { passive: true }
  );

  window.addEventListener("pointerout", (e) => {
    if (!e.relatedTarget) pointer.active = false;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  reducedMotionMedia.addEventListener?.("change", handleMotionChange);
  window.addEventListener("motion-preference-changed", handleMotionChange);
})();
