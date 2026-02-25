'use strict';

// Wait for GSAP libraries to load
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  /**
   * INITIALIZE PAGE (replaces preloader functionality)
   */
  window.addEventListener("load", function () {
    // Add loaded class to body to enable scrolling and show header/topbar
    document.body.classList.add("loaded");

    // Start initial animations on page load
    initHeroAnimations();
  });

  /**
   * HERO ANIMATIONS
   */
  /**
   * HERO ANIMATIONS - 3D Replaces this
   */
  // Slider logic removed as 3D model replaces it.
  // Animations for text entry could be re-added here if targeting specific new classes,
  // but existing ScrollTrigger setup below handles generic section headings.

  // Initialize Simple Text Animations for 3D Hero on Load
  const initHeroAnimations = () => {
    const heroReveal = document.querySelectorAll(".hero-3d .slider-reveal");
    if (heroReveal.length) {
      gsap.from(heroReveal, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });
    }
  };


  /**
   * SCROLL ANIMATIONS (ScrollTrigger)
   */

  // Animate Section Titles and Subtitles
  // Exclude titles in special-dish as they have their own staggered animation
  const sectionHeadings = document.querySelectorAll("section:not(.special-dish) .section-title, section:not(.special-dish) .section-subtitle");
  sectionHeadings.forEach(heading => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Animate Service Cards (Staggered)
  const serviceCards = document.querySelectorAll(".service-card");
  if (serviceCards.length) {
    gsap.from(serviceCards, {
      scrollTrigger: {
        trigger: serviceCards[0],
        start: "top 85%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }

  // Animate Menu Cards
  const menuCards = document.querySelectorAll(".menu-card");
  gsap.from(menuCards, {
    scrollTrigger: {
      trigger: ".menu .grid-list",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.7)"
  });

  // Animate Special Dish Components
  const specialDishItems = document.querySelectorAll(".special-dish .container > *");
  if (specialDishItems.length) {
    gsap.fromTo(specialDishItems,
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".special-dish",
          start: "top 70%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        onComplete: () => ScrollTrigger.refresh()
      }
    );
  }

  // Animate Chefs Cards (Staggered)
  const chefCards = document.querySelectorAll(".chef-card");
  if (chefCards.length) {
    gsap.fromTo(chefCards,
      { y: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".chefs .grid-list",
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        onComplete: () => ScrollTrigger.refresh()
      }
    );
  }

  // Animate Testimonials
  const testiItems = document.querySelectorAll(".testi .container > *");
  if (testiItems.length) {
    gsap.from(testiItems, {
      scrollTrigger: {
        trigger: ".testi",
        start: "top 75%"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }

  // Animate Reservation & Contact
  const reservationForm = document.querySelector(".reservation .form-left");
  const reservationRight = document.querySelector(".reservation .form-right");
  if (reservationForm && reservationRight) {
    gsap.from(reservationForm, {
      scrollTrigger: {
        trigger: ".reservation",
        start: "top 70%"
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
    gsap.from(reservationRight, {
      scrollTrigger: {
        trigger: ".reservation",
        start: "top 70%"
      },
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }

  // Animate Features
  const featureItems = document.querySelectorAll(".feature-item");
  if (featureItems.length) {
    gsap.from(featureItems, {
      scrollTrigger: {
        trigger: ".features",
        start: "top 80%"
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });
  }

  // Animate Events
  const eventCards = document.querySelectorAll(".event-card");
  if (eventCards.length) {
    gsap.from(eventCards, {
      scrollTrigger: {
        trigger: ".event",
        start: "top 80%"
      },
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }

  // Generic Reveal classes
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(reveal => {
    gsap.from(reveal, {
      scrollTrigger: {
        trigger: reveal,
        start: "top 90%"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // Generic Parallax for items with data-parallax-item
  const parallaxItems = document.querySelectorAll("[data-parallax-item]");
  parallaxItems.forEach(item => {
    const speed = item.dataset.parallaxSpeed || 1;
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: (speed * 100),
      ease: "none"
    });
  });

  // Parallax for About Banner - Handled by generic parallax now

  /**
   * NAVBAR INTERACTIONS
   */
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = () => {
    const isOpening = !navbar.classList.contains("active");

    // When opening the nav, ensure the header is visible (remove 'hide')
    // because the header's transform: translateY(-100%) breaks the navbar's
    // position: fixed (transforms create a new containing block).
    if (isOpening) {
      header.classList.remove("hide");
      header.classList.add("active");
    }

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }

  navTogglers.forEach(btn => btn.addEventListener("click", toggleNavbar));

  /**
   * HEADER & BACK TO TOP
   */
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  let lastScrollPos = 0;

  window.addEventListener("scroll", function () {
    // Don't hide the header while the mobile nav menu is open
    if (navbar.classList.contains("active")) {
      lastScrollPos = window.scrollY;
      return;
    }

    if (window.scrollY >= 50) {
      header.classList.add("active");
      backTopBtn.classList.add("active");

      // Hide header on scroll down, show on scroll up
      if (lastScrollPos < window.scrollY) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
    lastScrollPos = window.scrollY;
  });


  /**
   * MOUSE MOVE EFFECT FOR SHAPES
   */
  const shapes = document.querySelectorAll(".shape");
  let mouseX = 0;
  let mouseY = 0;
  let isShapesAnimating = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX * 0.05;
    mouseY = e.clientY * 0.05;

    if (!isShapesAnimating) {
      window.requestAnimationFrame(() => {
        shapes.forEach(shape => {
          gsap.to(shape, {
            x: mouseX,
            y: mouseY,
            duration: 1,
            ease: "power2.out"
          });
        });
        isShapesAnimating = false;
      });
      isShapesAnimating = true;
    }
  });

  /**
   * MAGNETIC BUTTON EFFECT
   */
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });

  /**
   * BOOKING MODAL
   */
  const bookingModal = document.querySelector("[data-modal]");
  const bookingModalTogglers = document.querySelectorAll("[data-booking-modal-toggler]");
  const bookingModalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const bookingModalOverlay = document.querySelector("[data-modal-overlay]");

  const toggleModal = function () {
    bookingModal.classList.toggle("active");
    document.body.classList.toggle("modal-active");
  }

  if (bookingModalTogglers) {
    bookingModalTogglers.forEach(toggler => {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();
        toggleModal();
      });
    });
  }

  if (bookingModalCloseBtn) {
    bookingModalCloseBtn.addEventListener("click", toggleModal);
  }

  if (bookingModalOverlay) {
    bookingModalOverlay.addEventListener("click", toggleModal);
  }

  /**
   * ACTIVE NAV LINK (ScrollSpy)
   * Highlights the nav item for the section currently in view.
   */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-link[href^='#']");

  const updateActiveLink = function () {
    let currentSectionId = null;
    const viewportTriggerLine = window.innerHeight * 0.3; // 30% from top

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= viewportTriggerLine && rect.bottom >= viewportTriggerLine) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      const targetId = href && href.startsWith("#") ? href.slice(1) : null;

      if (targetId && targetId === currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);

  // Close mobile nav when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
        toggleNavbar();
      }
    });
  });

});