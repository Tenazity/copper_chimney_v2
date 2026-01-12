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
  const sectionHeadings = document.querySelectorAll(".section-title, .section-subtitle");
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
  gsap.from(serviceCards, {
    scrollTrigger: {
      trigger: ".service-list", // Assuming a wrapper or using the first card
      trigger: serviceCards[0],
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

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

  // Animate Special Dish Image
  const specialDishBanner = document.querySelector(".special-dish-banner img");
  if (specialDishBanner) {
    gsap.from(specialDishBanner, {
      scrollTrigger: {
        trigger: ".special-dish",
        start: "top 70%",
        scrub: 1
      },
      scale: 1.2,
      y: 100
    });
  }

  // Parallax for About Banner
  const aboutBanner = document.querySelector(".about-banner");
  if (aboutBanner) {
    gsap.to(".about-banner img", {
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: -50
    });
  }

  /**
   * NAVBAR INTERACTIONS
   */
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = () => {
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
  document.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".shape");
    const x = (e.clientX * 0.05);
    const y = (e.clientY * 0.05);

    shapes.forEach(shape => {
      gsap.to(shape, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
    });
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

});