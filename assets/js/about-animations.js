// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --------------------
// INITIAL PAGE LOAD - HEADER
// --------------------
const pageLoadTimeline = gsap.timeline();
pageLoadTimeline.from(".main-header", {
    duration: 1.2,
    y: -120,
    opacity: 0,
    ease: "bounce.out"
});

// --------------------
// OUR STORY SECTION - KEEP AS IS
// --------------------
gsap.from(".our-story .content", {
    scrollTrigger: {
        trigger: ".our-story",
        start: "top 80%",
    },
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power4.out",
    onComplete: () => {
        gsap.to(".our-story .icon", {
            duration: 0.5,
            scale: 1.2,
            repeat: 1,
            yoyo: true,
            ease: "power2.inOut"
        });
    }
});

gsap.from(".our-story .image-container", {
    scrollTrigger: {
        trigger: ".our-story",
        start: "top 80%",
    },
    duration: 1.2,
    x: 100,
    opacity: 0,
    scale: 0.8,
    ease: "power4.out",
    onComplete: () => {
        gsap.to(".our-story .image-container img", {
            duration: 2,
            y: 20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }
});

// --------------------
// STATS SECTION - REFINED ENTRANCE + POP EFFECT
// --------------------


// --------------------
// WHY CHOOSE US SECTION - STAGGERED BOUNCE
// --------------------
gsap.from([".why-choose .section-title", ".why-choose .subtitle"], {
    scrollTrigger: {
        trigger: ".why-choose",
        start: "top 85%"
    },
    duration: 1,
    y: 40,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

gsap.from(".info-card", {
    scrollTrigger: {
        trigger: ".why-grid",
        start: "top 80%"
    },
    duration: 1,
    y: 60,
    opacity: 0,
    scale: 0.85,
    stagger: 0.2,
    ease: "back.out(1.5)"
});

gsap.from([".small-image", ".center-image img"], {
    scrollTrigger: {
        trigger: ".why-grid",
        start: "top 80%"
    },
    duration: 1.2,
    opacity: 0,
    scale: 0.85,
    stagger: 0.25,
    ease: "power4.out"
});

// --------------------
// VISION AND MISSION SECTION - ELEGANT ENTRANCE
// --------------------
gsap.from([".vision-card", ".mission-card"], {
    scrollTrigger: {
        trigger: ".vision-mission-section",
        start: "top 80%"
    },
    duration: 1.4,
    y: 100,
    opacity: 0,
    scale: 0.85,
    stagger: 0.3,
    ease: "expo.out"
});

// --------------------
// FOOTER SECTION - FADE UP WITH SOFT SCALE
// --------------------
gsap.from(".footer-container", {
    scrollTrigger: {
        trigger: ".section7",
        start: "top 80%"
    },
    duration: 1.2,
    y: 60,
    opacity: 0,
    scale: 0.9,
    ease: "expo.out"
});

// --------------------
// HOVER EFFECTS
// --------------------
const addHoverAnimation = (element) => {
    element.addEventListener("mouseenter", () => {
        gsap.to(element, {
            duration: 0.4,
            scale: 1.08,
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
            ease: "power3.out"
        });
    });

    element.addEventListener("mouseleave", () => {
        gsap.to(element, {
            duration: 0.4,
            scale: 1,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            ease: "power3.in"
        });
    });
};

document.querySelectorAll(".stat-card, .info-card, .cta-button a, .btn").forEach(addHoverAnimation);

// --------------------
// POPUP ANIMATION
// --------------------
function openPopup() {
    const popup = document.getElementById("quotePopup");
    popup.style.display = "flex";

    const popupTimeline = gsap.timeline();

    popupTimeline
        .from(".popup-content", {
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            ease: "back.out(1.7)"
        })
        .from(".popup-form form", {
            duration: 0.4,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.3");
}

// --------------------
// ICON FLOATING EFFECT
// --------------------
gsap.utils.toArray(".info-card img, .card-header img").forEach(icon => {
    gsap.to(icon, {
        duration: 2,
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});
