document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay') || createMenuOverlay();

    // Create menu overlay if it doesn't exist
    function createMenuOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        return overlay;
    }

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Add click event to hamburger
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Set active menu item
    document.querySelectorAll(".nav-menu ul li a").forEach(link => {
        const hrefPath = link.getAttribute("href").split("/").pop();

        if (hrefPath === currentPath) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });
});