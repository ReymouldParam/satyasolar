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
// CONTACT SECTION ANIMATIONS
// --------------------
const contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%"
    }
});

// Contact form animation
contactTimeline.from(".contact-right", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power3.out"
})
    .from(".contact-right form", {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.4")
    .from(".contact-right input, .contact-right textarea", {
        duration: 0.4,
        y: 20,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out"
    }, "-=0.3");

// Contact info animation
gsap.from(".contact-left", {
    scrollTrigger: {
        trigger: ".contact-left",
        start: "top 80%"
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power3.out"
});

// Map animation
gsap.from(".map-box", {
    scrollTrigger: {
        trigger: ".map-box",
        start: "top 80%"
    },
    duration: 1,
    scale: 0.95,
    opacity: 0,
    ease: "power3.out"
});

// --------------------
// INTERACTIVE ELEMENTS
// --------------------
// Form field hover effects
gsap.utils.toArray(".contact-right input, .contact-right textarea").forEach(element => {
    element.addEventListener("focus", () => {
        gsap.to(element, {
            duration: 0.3,
            scale: 1.02,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            ease: "power2.out"
        });
    });

    element.addEventListener("blur", () => {
        gsap.to(element, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 5px 10px rgba(0,0,0,0.05)",
            ease: "power2.in"
        });
    });
});

// Submit button animation
const submitButton = document.querySelector(".contact-right button[type='submit']");
if (submitButton) {
    submitButton.addEventListener("mouseenter", () => {
        gsap.to(submitButton, {
            duration: 0.3,
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            ease: "power2.out"
        });
    });

    submitButton.addEventListener("mouseleave", () => {
        gsap.to(submitButton, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
            ease: "power2.in"
        });
    });
}

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

// function closePopup() {
//     const popup = document.getElementById("quotePopup");
//     gsap.to(".popup-content", {
//         duration: 0.4,
//         scale: 0.8,
//         opacity: 0,
//         ease: "power2.in",
//         onComplete: () => {
//             popup.style.display = "none";
//         }
//     });
// }

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Refresh ScrollTrigger to ensure proper initialization
    ScrollTrigger.refresh();
}); 