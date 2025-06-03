document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.main-header');
    let menuOverlay = document.querySelector('.menu-overlay');

    // Create overlay only if not present
    if (!menuOverlay) {
        menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        document.body.appendChild(menuOverlay);
    }

    // Toggle nav menu visibility
    function toggleMenu() {
        const isActive = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    // Toggle on hamburger click
    hamburger?.addEventListener('click', toggleMenu);

    // Toggle off on overlay click
    menuOverlay?.addEventListener('click', toggleMenu);

    // Close menu on nav link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Set active menu item
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        const hrefPath = link.getAttribute("href").split("/").pop();
        if (hrefPath === currentPath) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });

    // Auto-close menu on resize (if open and going back to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking outside it
    document.addEventListener('click', (e) => {
        if (
            navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            toggleMenu();
        }
    });

    // Add .scrolled class on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });
});
