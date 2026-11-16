/**
 * Vatsal Vadgama — Software Engineer Portfolio
 * Main Application Script: Lenis Smooth Scroll, GSAP ScrollTrigger Storytelling,
 * Card Stacking, Metric Counters, Nav ScrollSpy, and Validated Contact Form.
 */

// --------------------------------------------------------------------------
// 1. Project Case Details Modal Data
// --------------------------------------------------------------------------
const projectData = {
  vixora: {
    kicker: "01 / PRODUCT ENGINEERING · FULL STACK",
    title: "Vixora — Video Streaming Platform",
    description: "A production-grade video platform designed around the full creator and viewer lifecycle: multi-format upload pipelines, channel subscriptions, playlist curation, real-time activity feeds, and low-latency interaction.",
    points: [
      ["PRODUCT FLOW", "JWT authentication, media chunk uploads, channel subscriptions, watch history, dynamic playlists, and instant activity alerts."],
      ["BACKEND ARCHITECTURE", "High-throughput REST APIs built with Node.js, Express, PostgreSQL, and Prisma with normalized schemas optimized for video metadata and indexing."],
      ["REAL-TIME & ASYNC", "Redis caching, BullMQ background job queues for encoding and notification dispatches, and Socket.IO for live peer activity."]
    ],
    links: [
      ["Live Platform", "https://app.vixora.co.in"],
      ["Backend on GitHub", "https://github.com/vatsal3030/vixora-backend", true]
    ]
  },
  chemicrown: {
    kicker: "02 / FULL STACK DEVELOPER INTERNSHIP · CHEMICROWN TRADING CO.",
    title: "ChemiCrown CDMS — Commerce & ERP",
    description: "An enterprise ERP and B2B commerce platform built during my software engineering internship, consolidating industrial chemical distribution, hazardous material compliance, inventory pipelines, sales orders, and accounting into a single operational system.",
    points: [
      ["B2B COMMERCE", "Automated product catalog, chemical compliance tracking, dynamic tiered pricing, quote-to-order lifecycle, and payment settlement."],
      ["INTERNAL OPERATIONS", "Role-based access control, employee administration, warehouse inventory reconciliation, and operational audit logging."],
      ["PRODUCTION STACK", "React with Vite, Node.js, PostgreSQL, Prisma ORM, and Supabase cloud infrastructure."]
    ],
    links: []
  },
  aurapass: {
    kicker: "03 / SYSTEMS & COMPUTER VISION · BIOMETRICS",
    title: "AuraPass — Biometric Attendance & Edge Access",
    description: "An on-premise facial recognition attendance and access system engineered for sub-300ms verification, anti-spoofing liveness checks, multi-tenant administrative controls, and tamper-evident auditing.",
    points: [
      ["EDGE VERIFICATION", "Sub-300ms facial verification pipeline utilizing OpenCV and deep neural networks with active liveness checks resisting 2D presentation attacks."],
      ["CONCURRENCY & BACKEND", "High-concurrency Flask with Gevent asynchronous networking, Celery worker cluster, PostgreSQL, and Redis cache."],
      ["ENTERPRISE KIOSK", "Hardware kiosk interface with React 19, multi-tenant role-based permissions, and cryptographically verified audit trails packed in Docker containers."]
    ],
    links: [
      ["Live Demo", "https://13-60-225-165.sslip.io"],
      ["Project on GitHub", "https://github.com/PrashantTarbundiya/RMS", true]
    ]
  },
  soil: {
    kicker: "MORE PROJECTS / APPLIED MACHINE LEARNING",
    title: "Soil Signals — Spectrometer Analysis Pipeline",
    description: "An applied ML pipeline converting raw spectrometer optical wavelength readings into actionable soil quality parameters (NPK nutrients, organic carbon, pH, and moisture). Top 10 finalist at HackNUthon 6.0.",
    points: [
      ["SPECTRAL PIPELINE", "Preprocessed noisy optical spectrometer curves, baseline drift correction, and domain-informed wavelength feature extraction."],
      ["MODEL BENCHMARKING", "Evaluated Random Forest, CatBoost, LightGBM, and Deep Learning regressors for nutrient and pH prediction."],
      ["PREDICTION IMPACT", "Achieved an R² validation score of 0.89 across test benchmarks, earning finalist status at HackNUthon 6.0."]
    ],
    links: [
      ["Project on GitHub", "https://github.com/vatsal3030/Reve-soil-1.0"]
    ]
  },
  elevara: {
    kicker: "AI CAREER TOOLS · PRODUCT EXPERIMENT",
    title: "Elevara — AI Career Acceleration OS",
    description: "An integrated career workspace combining ATS resume parsing, contextual job-tailoring, cover letter generation, AI mock interviews, and personalized learning roadmaps.",
    points: [
      ["CAREER WORKFLOWS", "Semantic parsing of resumes against target job descriptions with instant gap identification."],
      ["INTERVIEW COACH", "Interactive mock interview prompting with contextual feedback loops powered by Gemini API."],
      ["STACK", "React frontend, Node.js service layer, PostgreSQL, and Google Gemini API integration."]
    ],
    links: [
      ["Open Elevara", "https://career.vixora.co.in/"]
    ]
  },
  bookit: {
    kicker: "SERVICE MARKETPLACE · FULL STACK",
    title: "Bookit — Appointment & Service Booking",
    description: "A customer-to-provider service marketplace exploring provider discovery, slot booking, real-time calendar synchronization, and transaction tracking.",
    points: [
      ["CUSTOMER EXPERIENCE", "Frictionless provider discovery, service tier selection, and calendar slot picker."],
      ["RESERVATION ENGINE", "Concurrent slot locking preventing double-bookings, backed by ACID relational transactions."],
      ["STACK", "React, Express REST API, PostgreSQL, and Prisma ORM."]
    ],
    links: [
      ["Open Bookit", "https://bookit.vixora.co.in/"],
      ["Backend on GitHub", "https://github.com/vatsal3030/Bookit-Backend", true]
    ]
  },
  p2p: {
    kicker: "SYSTEMS PROGRAMMING · C++",
    title: "Secure P2P Network — Encrypted Messaging",
    description: "A native C++ peer-to-peer communication node exploring direct socket networking, custom memory management, cryptographic handshakes, and encrypted local message storage.",
    points: [
      ["P2P PROTOCOL", "Peer discovery and direct socket communication without central relay servers."],
      ["SECURITY & CRYPTO", "End-to-end encrypted packet transmission, session authentication, and safe file storage."],
      ["LOW-LEVEL SYSTEMS", "Custom memory arenas in modern C++ with manual resource lifecycle management."]
    ],
    links: [
      ["Project on GitHub", "https://github.com/vatsal3030/Chat-network-app"]
    ]
  }
};

// --------------------------------------------------------------------------
// 2. Project Dialog / Modal Interaction
// --------------------------------------------------------------------------
const dialog = document.querySelector(".project-dialog");
const closeButton = document.querySelector(".dialog-close");

if (dialog && closeButton) {
  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.open;
      const project = projectData[key];
      if (!project) return;

      const kickerEl = document.querySelector("#dialog-kicker");
      const titleEl = document.querySelector("#dialog-title");
      const descEl = document.querySelector("#dialog-description");
      const pointsEl = document.querySelector("#dialog-points");
      const linksEl = document.querySelector("#dialog-links");

      if (kickerEl) kickerEl.textContent = project.kicker;
      if (titleEl) titleEl.textContent = project.title;
      if (descEl) descEl.textContent = project.description;

      if (pointsEl) {
        pointsEl.replaceChildren(
          ...project.points.map(([heading, detail]) => {
            const row = document.createElement("div");
            row.className = "dialog-point";
            const label = document.createElement("b");
            label.textContent = heading;
            const copy = document.createElement("p");
            copy.textContent = detail;
            row.append(label, copy);
            return row;
          })
        );
      }

      if (linksEl) {
        linksEl.replaceChildren(
          ...project.links.map(([label, href, secondary]) => {
            const link = document.createElement("a");
            link.href = href;
            link.target = "_blank";
            link.rel = "noreferrer";
            link.textContent = `${label} ↗`;
            if (secondary) link.className = "secondary";
            return link;
          })
        );
      }

      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) dialog.close();
});
}

// --------------------------------------------------------------------------
// 3. Navigation: Mobile Drawer & Smart Hide-on-Scroll
// --------------------------------------------------------------------------
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const siteHeader = document.querySelector(".site-header");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
    if (siteHeader) siteHeader.classList.remove("nav-hidden");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
});
}

// Smart capsule navigation: hides on downward scroll, reveals on upward scroll
if (siteHeader) {
  let previousScroll = window.scrollY;
  let scrollThreshold = 8;

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - previousScroll;

      if (Math.abs(delta) > scrollThreshold) {
        const isScrollingDown = delta > 0;
        const menuIsOpen = menuToggle?.getAttribute("aria-expanded") === "true";

        if (currentScroll < 80 || !isScrollingDown || menuIsOpen) {
          siteHeader.classList.remove("nav-hidden");
        } else {
          siteHeader.classList.add("nav-hidden");
        }
      }
      previousScroll = Math.max(0, currentScroll);
    },
    { passive: true }
  );
}

// Dynamic copyright year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --------------------------------------------------------------------------
// 3B. Motion Preference & Manual Toggle Control
// --------------------------------------------------------------------------
const motionBtn = document.querySelector("#motion-toggle-btn");
const motionLabel = motionBtn?.querySelector(".motion-label");

function getInitialMotionPreference() {
  const saved = localStorage.getItem("portfolio-motion-pref");
  if (saved === "off" || saved === "on") return saved === "on";
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let isMotionActive = getInitialMotionPreference();

function applyMotionState(active) {
  isMotionActive = active;
  if (!active) {
    document.documentElement.classList.add("motion-off");
    if (motionBtn) {
      motionBtn.setAttribute("data-state", "off");
      motionBtn.setAttribute("aria-pressed", "true");
    }
    if (motionLabel) motionLabel.textContent = "MOTION OFF";
  } else {
    document.documentElement.classList.remove("motion-off");
    if (motionBtn) {
      motionBtn.setAttribute("data-state", "on");
      motionBtn.setAttribute("aria-pressed", "false");
    }
    if (motionLabel) motionLabel.textContent = "MOTION ON";
  }
  localStorage.setItem("portfolio-motion-pref", active ? "on" : "off");
  window.dispatchEvent(new CustomEvent("motion-preference-changed", { detail: { active } }));
}

// Initialize motion state
applyMotionState(isMotionActive);

if (motionBtn) {
  motionBtn.addEventListener("click", () => {
    applyMotionState(!isMotionActive);
});
}

// --------------------------------------------------------------------------
// 4. Lenis Smooth Scroll + GSAP ScrollTrigger Integration
// --------------------------------------------------------------------------
if (window.Lenis && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.088,
    wheelMultiplier: 0.92,
    anchors: { offset: 90 },
    respectReducedMotion: true
  });
  window.lenis = lenis;

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Smooth scroll for internal anchor links using Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || targetId === "#top") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        return;
      }
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -90, duration: 1.2 });
      }
    });
  });

  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    // ------------------------------------------------------------------------
    // 4A. Hero Section Entrance Animation (Home Page Only)
    // ------------------------------------------------------------------------
    if (document.querySelector(".hero")) {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".hero-topline .eyebrow", {
          y: 10,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.1
        })
        .from(
          ".hero-decoration",
          {
            y: 20,
            scale: 0.95,
            autoAlpha: 0,
            duration: 0.85,
            clearProps: "transform"
          },
          "-=0.3"
        )
        .from(
          ".hero-kicker",
          {
            y: 12,
            scale: 0.94,
            autoAlpha: 0,
            duration: 0.45
          },
          "-=0.5"
        )
        .from(
          ".hero-title span, .hero-title em, .hero-title i",
          {
            yPercent: 105,
            filter: "blur(6px)",
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.07
          },
          "-=0.25"
        )
        .from(
          ".hero-description",
          {
            y: 14,
            autoAlpha: 0,
            duration: 0.5
          },
          "-=0.35"
        )
        .from(
          ".hero-actions > *",
          {
            y: 12,
            autoAlpha: 0,
            duration: 0.45,
            stagger: 0.08
          },
          "-=0.3"
        )
        .from(
          ".hero-side-note",
          {
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.1
          },
          "-=0.2"
        )
        .from(
          ".hero-index",
          {
            autoAlpha: 0,
            duration: 0.4
          },
          "-=0.3"
        );

      // Subtle fade & scale on hero copy during scroll
      gsap.to(".hero-copy", {
        yPercent: -4,
        autoAlpha: 0.65,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.7
        }
      });
    }

    // ------------------------------------------------------------------------
    // 4B. Top Scroll Progress Indicator
    // ------------------------------------------------------------------------
    gsap.fromTo(
      ".scroll-progress span",
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "max",
          scrub: 0.2
        }
      }
    );

    // ------------------------------------------------------------------------
    // 4C. Interactive 3D Card Stacking Effect (Desktop >= 901px)
    // ------------------------------------------------------------------------
    const isDesktop = window.matchMedia("(min-width: 901px)");

    if (isDesktop.matches) {
      const cards = gsap.utils.toArray(".project-card");

      if (cards.length >= 3) {
        // Card 1: As Card 2 scrolls up and pins over it, Card 1 gently blurs and scales
        gsap.to(cards[0], {
          scale: 0.96,
          opacity: 0.88,
          filter: "blur(2px) brightness(0.86)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[1],
            start: "top 80%",
            end: "top 112px",
            scrub: true
          }
        });

        // As Card 3 scrolls up and pins over Card 2:
        // Card 2 gently blurs and scales
        gsap.to(cards[1], {
          scale: 0.97,
          opacity: 0.9,
          filter: "blur(2px) brightness(0.88)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[2],
            start: "top 80%",
            end: "top 130px",
            scrub: true
          }
        });

        // Card 1 settles slightly deeper into the background with a soft blur, but NEVER goes blank or black!
        gsap.to(cards[0], {
          scale: 0.93,
          opacity: 0.82,
          filter: "blur(3.5px) brightness(0.8)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[2],
            start: "top 80%",
            end: "top 130px",
            scrub: true
          }
        });
      }
    }

    // Parallax on project visuals
    document.querySelectorAll(".project-card").forEach((card) => {
      const visual = card.querySelector(".project-visual .project-image");
      if (visual) {
        gsap.fromTo(
          visual,
          { scale: 1.06, yPercent: 4 },
          {
            scale: 1,
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7
            }
          }
        );
      }
    });

    // ------------------------------------------------------------------------
    // 4D. Animated Metric Counters
    // ------------------------------------------------------------------------
    const counterElements = [
      { selector: ".metric-card:nth-child(2) strong", target: 8.34, decimals: 2, suffix: "<span>/10</span>" },
      { selector: ".metric-card:nth-child(3) strong", target: 0.89, decimals: 2, suffix: "<span> R²</span>" },
      { selector: ".metric-card:nth-child(4) strong", target: 1645, decimals: 0, suffix: "" }
    ];

    counterElements.forEach(({ selector, target, decimals, suffix }) => {
      const el = document.querySelector(selector);
      if (!el) return;

      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              if (decimals === 0) {
                el.innerHTML = Math.round(obj.val).toLocaleString("en-US") + suffix;
              } else {
                el.innerHTML = obj.val.toFixed(decimals) + suffix;
              }
            }
          });
        }
      });
    });

    // ------------------------------------------------------------------------
    // 4E. Timeline Progress Line
    // ------------------------------------------------------------------------
    const timeline = document.querySelector(".timeline");
    if (timeline) {
      let timelineLine = timeline.querySelector(".timeline-progress-line");
      if (!timelineLine) {
        timelineLine = document.createElement("span");
        timelineLine.className = "timeline-progress-line";
        timelineLine.setAttribute("aria-hidden", "true");
        timeline.prepend(timelineLine);
      }
      gsap.fromTo(
        timelineLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 72%",
            end: "bottom 65%",
            scrub: 0.5
          }
        }
      );
    }

    // Dedicated Approach Flow sequential connector reveal
    const flowSection = document.querySelector(".flow");
    if (flowSection) {
      const articles = flowSection.querySelectorAll("article");
      const connectors = flowSection.querySelectorAll(".flow-connector");

      const flowTl = gsap.timeline({
        scrollTrigger: {
          trigger: flowSection,
          start: "top 78%",
          once: true
        }
      });

      if (articles[0]) {
        flowTl.fromTo(articles[0], { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" });
      }
      if (connectors[0]) {
        flowTl.to(connectors[0], {
          opacity: 1,
          duration: 0.4,
          onStart: () => connectors[0].classList.add("is-active")
        });
      }
      if (articles[1]) {
        flowTl.fromTo(articles[1], { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");
      }
      if (connectors[1]) {
        flowTl.to(connectors[1], {
          opacity: 1,
          duration: 0.4,
          onStart: () => connectors[1].classList.add("is-active")
        });
      }
      if (articles[2]) {
        flowTl.fromTo(articles[2], { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");
      }
    }

    // ------------------------------------------------------------------------
    // 4F. Section Reveals
    // ------------------------------------------------------------------------
    const reveals = [
      [".section-heading", { y: 16, duration: 0.7 }],
      [".page-hero > *", { y: 24, duration: 0.8, stagger: 0.08 }],
      [".about-grid", { y: 40, duration: 0.9 }],
      [".principles article", { y: 24, duration: 0.7, stagger: 0.12 }],
      [".work-intro > *", { y: 26, duration: 0.8, stagger: 0.1 }],
      [".toolkit", { y: 28, duration: 0.75 }],
      [".metric-card", { y: 32, duration: 0.75, stagger: 0.12 }],
      [".timeline-item", { y: 24, duration: 0.7, stagger: 0.12 }],
      [".profiles-inner > *", { y: 28, duration: 0.8, stagger: 0.15 }],
      [".contact-main > *, .contact-form", { y: 22, duration: 0.8, stagger: 0.08 }],
      [".case-story", { y: 28, duration: 0.8, stagger: 0.12 }]
    ];

    // Dedicated Cinematic Reveal for "More Things I've Built"
    const otherWorkGrid = document.querySelector(".other-work-grid");
    if (otherWorkGrid) {
      gsap.fromTo(
        otherWorkGrid.querySelectorAll(".mini-project"),
        {
          y: 45,
          scale: 0.95,
          autoAlpha: 0
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: otherWorkGrid,
            start: "top 82%",
            once: true
          }
        }
      );
    }

    reveals.forEach(([selector, vars]) => {
      gsap.utils.toArray(selector).forEach((element, index) => {
        const from = { ...vars, autoAlpha: 0 };
        const stagger = from.stagger;
        delete from.stagger;
        const duration = vars.duration || 0.8;
        delete from.duration;

        gsap.fromTo(
          element,
          from,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: duration,
            ease: "power3.out",
            delay: stagger ? index * stagger : 0,
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true
            }
          }
        );
      });
    });

    // ------------------------------------------------------------------------
    // 4G. Pointer Glow Effect on Project Cards
    // ------------------------------------------------------------------------
    const pointerFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (pointerFine.matches) {
      document.querySelectorAll(".project-card").forEach((card) => {
        const moveX = gsap.quickTo(card, "--pointer-x", { duration: 0.35, ease: "power3" });
        const moveY = gsap.quickTo(card, "--pointer-y", { duration: 0.35, ease: "power3" });

        card.addEventListener("pointermove", (event) => {
          const rect = card.getBoundingClientRect();
          moveX(`${event.clientX - rect.left}px`);
          moveY(`${event.clientY - rect.top}px`);
        });
      });
    }

    // ------------------------------------------------------------------------
    // 4H. Navigation ScrollSpy: Active Section Highlighting
    // ------------------------------------------------------------------------
    const sections = [
      { id: "work", start: "top 45%", end: "bottom 45%" },
      { id: "about", start: "top 45%", end: "bottom 45%" },
      { id: "journey", start: "top 45%", end: "bottom 45%" },
      { id: "contact", start: "top 65%", end: "bottom bottom" }
    ];
    sections.forEach(({ id, start, end }) => {
      const sectionEl = document.getElementById(id);
      const navLink = document.querySelector(`.primary-nav a[href="#${id}"]`);

      if (sectionEl && navLink) {
        ScrollTrigger.create({
          trigger: sectionEl,
          start: start,
          end: end,
          onToggle: (self) => {
            if (self.isActive) {
              document.querySelectorAll(".primary-nav a").forEach((a) => a.classList.remove("is-active"));
              navLink.classList.add("is-active");
            }
          }
        });
      }
    });
});
}

// --------------------------------------------------------------------------
// 5. Client-Centric Contact Form with Inline Validation & Structured Mailto
// --------------------------------------------------------------------------
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

if (contactForm && contactStatus) {
  const fields = {
    name: contactForm.querySelector('input[name="name"]'),
    email: contactForm.querySelector('input[name="email"]'),
    subject: contactForm.querySelector('input[name="subject"]'),
    message: contactForm.querySelector('textarea[name="message"]')
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(field, message) {
    field.classList.add("input-error");
    let errEl = field.parentElement.querySelector(".field-error-msg");
    if (!errEl) {
      errEl = document.createElement("span");
      errEl.className = "field-error-msg";
      field.parentElement.appendChild(errEl);
    }
    errEl.textContent = message;
  }

  function clearError(field) {
    field.classList.remove("input-error");
    const errEl = field.parentElement.querySelector(".field-error-msg");
    if (errEl) errEl.remove();
  }

  // Real-time error clearing on input
  Object.values(fields).forEach((field) => {
    if (!field) return;
    field.addEventListener("input", () => clearError(field));
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let hasErrors = false;

    // Validate Name
    const nameVal = fields.name.value.trim();
    if (nameVal.length < 2) {
      setError(fields.name, "Please provide your name (at least 2 characters).");
      hasErrors = true;
    } else {
      clearError(fields.name);
    }

    // Validate Email
    const emailVal = fields.email.value.trim();
    if (!validateEmail(emailVal)) {
      setError(fields.email, "Please enter a valid email address.");
      hasErrors = true;
    } else {
      clearError(fields.email);
    }

    // Validate Subject / Project
    const subjectVal = fields.subject.value.trim();
    if (subjectVal.length < 4) {
      setError(fields.subject, "Please specify your project or topic (min 4 characters).");
      hasErrors = true;
    } else {
      clearError(fields.subject);
    }

    // Validate Message
    const messageVal = fields.message.value.trim();
    if (messageVal.length < 20) {
      setError(fields.message, "Please share a brief description of what you want to build (min 20 characters).");
      hasErrors = true;
    } else {
      clearError(fields.message);
    }

    if (hasErrors) {
      contactStatus.className = "form-status is-error";
      contactStatus.textContent = "Please fix the highlighted fields above before submitting.";
      return;
    }

    // Construct structured email draft
    const cleanSubject = `Project Inquiry from ${nameVal}: ${subjectVal.replace(/[\r\n]+/g, " ")}`;
    const emailBody = [
      `Hello Vatsal,`,
      ``,
      `I'd like to discuss a project with you.`,
      ``,
      `-----------------------------------------`,
      `Client / Sender Name: ${nameVal}`,
      `Email Address: ${emailVal}`,
      `Project Scope: ${subjectVal}`,
      `-----------------------------------------`,
      ``,
      `Project Details & Outcomes:`,
      messageVal,
      ``,
      `Looking forward to hearing from you.`,
      `Best regards,`,
      nameVal
    ].join("\n");

    const mailtoUrl = `mailto:vatsalvadgama04@gmail.com?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(emailBody)}`;
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vatsalvadgama04@gmail.com&su=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(emailBody)}`;
    const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=vatsalvadgama04@gmail.com&subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Copy formatted draft to clipboard for instant convenience
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailBody).catch(() => {});
    }

    // Directly open web Gmail in a new browser tab without forcing desktop app
    window.open(gmailWebUrl, "_blank", "noopener,noreferrer");

    contactStatus.className = "form-status is-success";
    contactStatus.innerHTML = `
      ✓ Opening Gmail web draft in a new tab! (Draft also copied to clipboard)
      <br />
      <span style="color: #a1a49b; display: inline-flex; flex-wrap: wrap; gap: 14px; margin-top: 8px; font-size: 11px;">
        <a href="${gmailWebUrl}" target="_blank" rel="noreferrer" style="color: var(--lime); text-decoration: underline;">Open Gmail Web ↗</a>
        <a href="${outlookWebUrl}" target="_blank" rel="noreferrer" style="color: var(--lime); text-decoration: underline;">Open Outlook Web ↗</a>
        <a href="${mailtoUrl}" style="color: #ced1c7; text-decoration: underline;">Use Desktop App ↗</a>
      </span>
    `;
  });
}
// --------------------------------------------------------------------------
// 6. Continuous + Scroll-Accelerated Rotating Chakra (Spark)
// --------------------------------------------------------------------------
(function () {
  const sparkEl = document.querySelector(".contact-spark");
  if (!sparkEl) return;

  let sparkAngle = 0;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.min(30, Math.abs(currentScrollY - lastScrollY));
      lastScrollY = currentScrollY;
    },
    { passive: true }
  );

  function tick() {
    if (!document.documentElement.classList.contains("motion-off")) {
      const speed = 0.35 + scrollVelocity * 0.45;
      sparkAngle = (sparkAngle + speed) % 360;
      scrollVelocity *= 0.9;
      sparkEl.style.transform = `rotate(${sparkAngle.toFixed(2)}deg)`;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
