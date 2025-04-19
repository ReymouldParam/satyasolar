
gsap.registerPlugin(ScrollTrigger);
// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Section 2 animations
    const section2 = document.querySelector('.section2');
    if (section2) {
        // Create a timeline for mission box
        const missionTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.section2',
                start: 'top 80%',
                end: 'center center',
                toggleActions: 'play none none reverse'
            }
        });

        // Mission box animations sequence
        missionTl
            .from('.mission-box', {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            })
            .from('.mission-box h4', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.mission-box h2', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3')
            .from('.mission-box p', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3')
            .from('.arrow-icon', {
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, '-=0.3');

        // Create a timeline for about box
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.section2',
                start: 'top 80%',
                end: 'center center',
                toggleActions: 'play none none reverse'
            }
        });

        // About box animations sequence
        aboutTl
            .from('.about-box', {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            })
            .from('.about-box p', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.about-image', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.3');
    }

    // Section 3 animations
    const section3 = document.querySelector('.section3-bg');
    if (section3) {
        // Create a timeline for section3
        const section3Tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.section3-bg',
                start: 'top 80%',
                end: 'center center',
                toggleActions: 'play none none reverse'
            }
        });

        // Section3 animations sequence
        section3Tl
            .from('.section3-bg', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            })
            .from('.services-section', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.5');

        // Enhanced service cards animations
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            const cardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'center center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Initial state
            gsap.set(card, {
                opacity: 0,
                scale: 0.8,
                rotationY: -20,
                transformPerspective: 1000,
                transformOrigin: "center center"
            });

            // Card animation sequence
            cardTl
                .to(card, {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    delay: index * 0.2
                })
                .from(card.querySelector('img'), {
                    y: 30,
                    opacity: 0,
                    rotation: -15,
                    duration: 0.6,
                    ease: 'back.out(1.7)'
                }, '-=0.4')
                .from(card.querySelector('p'), {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                }, '-=0.3');

            // Hover animation
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    rotationY: 5,
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(card.querySelector('img'), {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    rotationY: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(card.querySelector('img'), {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Container and carousel animations
        section3Tl
            .from('.container', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.3')
            .from('.carousel-header h2', {
                opacity: 0,
                x: -30,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.carousel-header p', {
                opacity: 0,
                x: -30,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3');
    }
    //  section5
    const section5 = document.querySelector('.section5');
    if (!section5) return;

    const section5Tl = gsap.timeline({
        scrollTrigger: {
            trigger: section5,
            start: 'top 80%',
            end: 'center center',
            toggleActions: 'play none none reverse',
            markers: false
        }
    });

    // Set initial states
    gsap.set('.section5-content', { opacity: 0, y: 50 });
    gsap.set('.images-column', { x: -100, opacity: 0 });
    gsap.set('.text-column', { x: 100, opacity: 0 });
    gsap.set('.image-box', { scale: 0.8, opacity: 0, rotationY: -30 });
    gsap.set('.bottom-image img', { scale: 0.8, opacity: 0, rotationY: 30 });
    gsap.set('.text-column h2', { y: 50, opacity: 0 });
    gsap.set('.text-column p', { y: 30, opacity: 0 });
    gsap.set('.cta-button', { scale: 0.8, opacity: 0 });

    // Timeline animation
    section5Tl
        .to('.section5-content', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
        .to('.images-column', { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.text-column', { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.image-box', {
            scale: 1, opacity: 1, rotationY: 0, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)'
        }, '-=0.6')
        .to('.bottom-image img', {
            scale: 1, opacity: 1, rotationY: 0, duration: 0.8, ease: 'back.out(1.7)'
        }, '-=0.6')
        .to('.text-column h2', {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
        }, '-=0.6')
        .to('.text-column p', {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
        }, '-=0.6')
        .to('.cta-button', {
            scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)'
        }, '-=0.4');

    // Hover effects
    document.querySelectorAll('.image-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
                scale: 1.05,
                rotationY: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
                scale: 1,
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    const bottomImage = document.querySelector('.bottom-image img');
    if (bottomImage) {
        bottomImage.addEventListener('mouseenter', () => {
            gsap.to(bottomImage, {
                scale: 1.05,
                rotationY: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        bottomImage.addEventListener('mouseleave', () => {
            gsap.to(bottomImage, {
                scale: 1,
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.05,
                backgroundColor: '#e0a420',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                backgroundColor: '#fcb426',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }


}); 
