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
}); 
