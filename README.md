# Vatsal Vadgama — Portfolio

A responsive software engineering portfolio built with plain HTML, CSS, and JavaScript. The home, selected work, and about/journey content are available as separate pages.

## Preview

Open any HTML page in a browser, or serve this folder with any static file server. There is no build step. GSAP 3.15.1 (including ScrollTrigger) and Lenis 1.3.27 load from their CDNs. The portrait particle canvas and layout are local, so the signature hero remains available if those libraries are unavailable.

## Motion system

- Lenis smooths wheel scrolling while retaining browser-native scrolling and anchor navigation. Reduced-motion preferences are respected.
- GSAP and ScrollTrigger coordinate the entrance choreography, scrubbed project scenes, timeline, and page progress indicator. The capsule navigation hides on downward scroll and returns on upward scroll.
- A local 2D canvas turns the supplied portrait into a responsive halftone particle study. On desktop, particles move away from the pointer and settle back into the portrait; on touch devices and for reduced-motion preferences the scene stays still.
- The text reveal, card hover states, and soft animated backgrounds use small custom CSS/JavaScript patterns inspired by React Bits and Magic UI. `art-direction.css` contains the current editorial visual system; `styles.css` retains shared page components. The project remains framework-free.

## Content

The portfolio is based on the supplied resume, linked public profiles, and project materials in the previous portfolio repository. It includes selected projects, technical focus, education, internship experience, hackathon milestones, competitive programming profiles, project screenshots, a portrait, and contact details. Project screenshots are contained in their frames to preserve the complete interface.

The contact form uses FormSubmit to forward submissions to the portfolio email address. FormSubmit requires the recipient to confirm its activation email after the first message before forwarding submissions.
