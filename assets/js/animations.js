// Initialize animations when DOM is loaded
gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    // Initial animations that should play immediately
    const initialAnimations = gsap.timeline();

    // Section 5 initial animation
    initialAnimations
        .to('.section5', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        })
        .to('.section5-content', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5')
        .to('.images-column', {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.text-column', {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.image-box', {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6')
        .to('.bottom-image img', {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6');

    // Testimonials initial animation
    initialAnimations
        .to('.testimonials-section', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        })
        .to('.section-title', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5')
        .to('.testimonial-card', {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.4')
        .to('.testimonial-image', {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6');

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
                    rotation: 0,
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

    // Testimonials Carousel Animation
    const testimonialsSection = document.querySelector('.testimonials-section');
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    if (testimonialsSection && testimonialCards.length > 0) {
        let currentIndex = 0;
        let isAnimating = false;
        let autoRotateInterval;

        // Animate section title
        gsap.to('.section-title', {
            scrollTrigger: {
                trigger: testimonialsSection,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Set initial state for all cards
        gsap.set(testimonialCards, {
            opacity: 0,
            scale: 0.9,
            rotationY: 20,
            transformPerspective: 1000,
            transformOrigin: "center center"
        });

        // Create indicators
        testimonialCards.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });

        const indicators = document.querySelectorAll('.carousel-indicator');
        testimonialCards[0].classList.add('active');
        animateCardIn(testimonialCards[0]);

        function animateCardIn(card) {
            const timeline = gsap.timeline();

            timeline
                .to(card, {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                })
                .to(card.querySelector('.testimonial-image'), {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power2.out'
                }, '-=0.8')
                .to(card.querySelectorAll('.star'), {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'back.out(1.7)'
                }, '-=0.6')
                .to(card.querySelector('.testimonial-quote'), {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power2.out'
                }, '-=0.4')
                .to(card.querySelector('.testimonial-text'), {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power2.out'
                }, '-=0.5')
                .to(card.querySelector('.testimonial-author'), {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power2.out'
                }, '-=0.5');
        }

        function animateCardOut(card) {
            const timeline = gsap.timeline();

            timeline
                .to(card.querySelector('.testimonial-author'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: 'power2.in'
                })
                .to(card.querySelector('.testimonial-text'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: 'power2.in'
                }, '-=0.2')
                .to(card.querySelector('.testimonial-quote'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: 'power2.in'
                }, '-=0.2')
                .to(card.querySelectorAll('.star'), {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: 'power2.in'
                }, '-=0.2')
                .to(card.querySelector('.testimonial-image'), {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.4,
                    ease: 'power2.in'
                }, '-=0.2')
                .to(card, {
                    opacity: 0,
                    scale: 0.9,
                    rotationY: 20,
                    duration: 0.6,
                    ease: 'power2.in'
                }, '-=0.2');
        }

        function updateCarousel() {
            if (isAnimating) return;
            isAnimating = true;

            testimonialCards.forEach((card, index) => {
                if (index === currentIndex) {
                    card.classList.add('active');
                    animateCardIn(card);
                } else {
                    card.classList.remove('active');
                    animateCardOut(card);
                }
            });

            indicators.forEach((indicator, index) => {
                gsap.to(indicator, {
                    backgroundColor: index === currentIndex ? '#fbbf24' : 'rgba(255,255,255,0.3)',
                    scale: index === currentIndex ? 1.2 : 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });

            const activeCard = testimonialCards[currentIndex];
            const cardWidth = activeCard.offsetWidth;
            const targetPosition = -currentIndex * (cardWidth + 40); // Adjust margin if needed

            gsap.to(testimonialTrack, {
                x: targetPosition,
                duration: 1.2,
                ease: 'power3.out',
                onComplete: () => {
                    isAnimating = false;
                }
            });
        }

        function goToSlide(index) {
            if (isAnimating) return;
            currentIndex = index;
            updateCarousel();
        }

        function nextSlide() {
            if (isAnimating) return;
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            updateCarousel();
        }

        function prevSlide() {
            if (isAnimating) return;
            currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
            updateCarousel();
        }

        // Button event listeners
        let debounceTimeout;
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(prevSlide, 100);
            });
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(nextSlide, 100);
            });
        }

        // Auto-rotation
        function startAutoRotate() {
            autoRotateInterval = setInterval(nextSlide, 10000);
        }

        function stopAutoRotate() {
            clearInterval(autoRotateInterval);
        }

        setTimeout(startAutoRotate, 3000);
        testimonialsSection.addEventListener('mouseenter', stopAutoRotate);
        testimonialsSection.addEventListener('mouseleave', startAutoRotate);

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        testimonialTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        testimonialTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleGesture();
        });

        function handleGesture() {
            if (isAnimating) return;
            const delta = touchEndX - touchStartX;
            if (Math.abs(delta) > 50) {
                if (delta > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        }
    }
});

//  FOR MOBILE HEADER
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Optional: Close menu when a nav link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// GET Quote Pop-up
function openPopup() {
    document.getElementById('quotePopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('quotePopup').style.display = 'none';
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});