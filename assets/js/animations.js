// Register ScrollTrigger plugin
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
}); 
