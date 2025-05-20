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
// SOLAR SERVICES SECTION ANIMATIONS
// --------------------
const servicesTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".solar-services",
        start: "top 70%"
    }
});

// Intro text animation
servicesTimeline.from(".solar-services .intro-text", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

// Service cards animation
gsap.utils.toArray(".solar-services .service-grid .service-card").forEach((card, index) => {
    const cardTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Card entrance animation
    cardTimeline.from(card, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        scale: 0.9,
        ease: "power3.out"
    })
        .from(card.querySelector(".card-overlay"), {
            duration: 0.6,
            opacity: 0,
            y: 30,
            ease: "power2.out"
        }, "-=0.4")
        .from(card.querySelector(".card-overlay h3"), {
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.3")
        .from(card.querySelector(".card-overlay p"), {
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.3");

    // Hover animations
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1.02,
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            ease: "power2.out"
        });

        gsap.to(card.querySelector(".card-overlay"), {
            duration: 0.3,
            opacity: 1,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            ease: "power2.in"
        });

        gsap.to(card.querySelector(".card-overlay"), {
            duration: 0.3,
            opacity: 0.8,
            ease: "power2.in"
        });
    });
});

// --------------------
// FOOTER ANIMATIONS
// --------------------
gsap.from(".footer-container", {
    scrollTrigger: {
        trigger: ".section7",
        start: "top 80%"
    },
    duration: 1.2,
    y: 60,
    opacity: 0,
    scale: 0.95,
    ease: "power4.out",
    onComplete: () => {
        // Add hover effects to interactive elements
        gsap.utils.toArray(".email-box input, .email-box button").forEach(element => {
            element.addEventListener("mouseenter", () => {
                gsap.to(element, {
                    duration: 0.3,
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    ease: "power2.out"
                });
            });
            element.addEventListener("mouseleave", () => {
                gsap.to(element, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: "0 5px 10px rgba(0,0,0,0.05)",
                    ease: "power2.in"
                });
            });
        });
    }
});

// --------------------
// POPUP ANIMATIONS
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

function closePopup() {
    const popup = document.getElementById("quotePopup");
    gsap.to(".popup-content", {
        duration: 0.4,
        scale: 0.8,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
            popup.style.display = "none";
        }
    });
} 