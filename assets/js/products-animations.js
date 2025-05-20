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
// HERO SECTION ANIMATIONS
// --------------------
const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%"
    }
});

// Left graphics animation
heroTimeline.from(".left-graphics img", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    scale: 0.8,
    ease: "power4.out"
});

// Center content animation
heroTimeline.from(".center-content .subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
}, "-=0.8")
    .from(".center-content .main-heading", {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: "power4.out"
    }, "-=0.4");

// Right graphics animation
heroTimeline.from(".right-graphics img", {
    duration: 1.2,
    x: 100,
    opacity: 0,
    scale: 0.8,
    ease: "power4.out"
}, "-=1.2");

// Add floating animation to sun icon
gsap.to(".right-graphics img", {
    duration: 2,
    y: 20,
    rotation: 5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// --------------------
// PRODUCTS SECTION ANIMATIONS
// --------------------
const productsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".products-section",
        start: "top 70%"
    }
});

// Intro text animation
productsTimeline.from(".intro-text", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

// // Product cards entrance animation
// productsTimeline.from(".product-cards .card", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//     scale: 0.9,
//     stagger: {
//         amount: 0.8,
//         from: "center"
//     },
//     ease: "back.out(1.7)",
//     onComplete: () => {
//         // Add hover animations to each card
//         const cards = gsap.utils.toArray(".product-cards .card");

//         cards.forEach(card => {
//             const img = card.querySelector(".image-container img");
//             const viewMoreSpan = card.querySelector(".view-more span");

//             // Store hover animations in timelines to control them better
//             let hoverIn = gsap.timeline({ paused: true })
//                 .to(card, {
//                     duration: 0.4,
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//                     ease: "power2.out"
//                 }, 0)
//                 .to(img, {
//                     duration: 0.4,
//                     scale: 1.1,
//                     ease: "power2.out"
//                 }, 0)
//                 .to(viewMoreSpan, {
//                     duration: 0.3,
//                     x: 5,
//                     ease: "power2.out"
//                 }, 0);

//             let hoverOut = gsap.timeline({ paused: true })
//                 .to(card, {
//                     duration: 0.4,
//                     scale: 1,
//                     boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
//                     ease: "power2.in"
//                 }, 0)
//                 .to(img, {
//                     duration: 0.4,
//                     scale: 1,
//                     ease: "power2.in"
//                 }, 0)
//                 .to(viewMoreSpan, {
//                     duration: 0.3,
//                     x: 0,
//                     ease: "power2.in"
//                 }, 0);

//             card.addEventListener("mouseenter", () => {
//                 hoverOut.pause(0); // reset opposite animation
//                 hoverIn.restart();
//             });

//             card.addEventListener("mouseleave", () => {
//                 hoverIn.pause(0);
//                 hoverOut.restart();
//             });
//         });
//     }
// }, "-=0.5");


// // --------------------
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

// Add parallax effect to product images
gsap.utils.toArray(".product-cards .image-container img").forEach(image => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: 50,
        ease: "none"
    });
}); 