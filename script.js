document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initial Reveal Stagger (GSAP)
    // Page load animation
    gsap.from(".hero-main-title, .hero-sub-title, .hero-cta-group", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    });

    // 2. Typed.js Implementation
    const typed = new Typed('#typed', {
        strings: ['Full-Stack Engineer', 'System Architect', 'AI Specialist', 'Next-Gen Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '_'
    });

    // 3. GSAP ScrollTrigger - Section Reveals
    gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out"
        });
    });

    // 4. Custom Cursor Logic
    const cursor = document.querySelector('.custom-cursor');
    if (cursor && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        // Hover effect on interactive elements
        const hoverables = document.querySelectorAll('a, button, .card');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 3, opacity: 0.3, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
            });
        });
    }

    // 5. Magnetic Hover Effect
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(el, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // 6. Navbar Scroll Behavior & Mobile Menu Toggle
    const nav = document.getElementById("main-nav");
    const menuBtn = document.getElementById("menu-btn");
    const navElements = document.getElementById("nav-elements");
    const navLinksItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    if (menuBtn && navElements) {
        menuBtn.addEventListener("click", () => {
            navElements.classList.toggle("active");
            
            // Toggle Icon
            const isOpen = navElements.classList.contains("active");
            menuBtn.innerHTML = isOpen ? '<i data-feather="x"></i>' : '<i data-feather="menu"></i>';
            feather.replace();
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });
    }

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener("click", () => {
            if (navElements.classList.contains("active")) {
                navElements.classList.remove("active");
                menuBtn.innerHTML = '<i data-feather="menu"></i>';
                feather.replace();
                document.body.style.overflow = 'auto';
            }
        });
    });

    // 7. Language Switcher Logic
    const langToggleBtn = document.getElementById("lang-toggle");
    let currentLang = "tr";

    const updateLanguage = () => {
        const elements = document.querySelectorAll(".lang-content");
        elements.forEach(el => {
            if (currentLang === "en" && el.dataset.en) {
                el.textContent = el.dataset.en;
            } else if (currentLang === "tr" && el.dataset.tr) {
                el.textContent = el.dataset.tr;
            }
        });
        if(langToggleBtn) langToggleBtn.textContent = currentLang === "tr" ? "EN" : "TR";
    };

    if(langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "tr" ? "en" : "tr";
            updateLanguage();
        });
    }

    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
