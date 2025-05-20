// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --------------------
// INDUSTRIAL ROOFTOPS SECTION ANIMATIONS
// --------------------
const industrialTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".residential-rooftops",
        start: "top 70%"
    }
});

// Left content animation
industrialTimeline.from(".residential-rooftops .left", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out"
})
.from(".residential-rooftops .right img", {
    duration: 1,
    x: 50,
    opacity: 0,
    scale: 0.9,
    ease: "power3.out"
}, "-=0.7");

// --------------------
// ADVANTAGES SECTION ANIMATIONS
// --------------------
const advantagesTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".advantages",
        start: "top 70%"
    }
});

// Title animation
advantagesTimeline.from(".advantages h2", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
})
.from(".advantages .advantage-grid .adv-card", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    scale: 0.95,
    stagger: {
        amount: 0.6,
        from: "center"
    },
    ease: "power2.out",
    onComplete: () => {
        // Add hover animations to advantage cards
        gsap.utils.toArray(".advantages .advantage-grid .adv-card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    ease: "power2.out"
                });
                
                gsap.to(card.querySelector("img"), {
                    duration: 0.3,
                    scale: 1.1,
                    ease: "power2.out"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                    ease: "power2.in"
                });
                
                gsap.to(card.querySelector("img"), {
                    duration: 0.3,
                    scale: 1,
                    ease: "power2.in"
                });
            });
        });
    }
}, "-=0.4");

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

// Add parallax effect to images
gsap.utils.toArray(".residential-rooftops .right img").forEach(image => {
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