document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dinamik Yıl Güncellemesi
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Navbar Scroll Efekti
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Mobil Menü Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // İkonu değiştir (Feather Icon)
        const isMenuOpen = navLinks.classList.contains("active");
        if(isMenuOpen) {
            menuBtn.innerHTML = '<i data-feather="x"></i>';
        } else {
            menuBtn.innerHTML = '<i data-feather="menu"></i>';
        }
        feather.replace(); // İkonu render et
    });

    // Linke tıklanınca menüyü kapat
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if(navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuBtn.innerHTML = '<i data-feather="menu"></i>';
                feather.replace();
            }
        });
    });

    // 4. Scroll (Intersection) Animasyonları
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Elementin %15'i göründüğünde tetikle
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Bir kere animasyon oynadıktan sonra gözlemlemeyi bırak (Performans)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 5. Dil Seçeneği Toggle
    const langToggleBtn = document.getElementById("lang-toggle");
    let currentLang = "tr"; // Default language

    function updateLanguageCards() {
        const elements = document.querySelectorAll(".lang-content");
        elements.forEach(el => {
            if (currentLang === "en" && el.dataset.en) {
                el.innerHTML = el.dataset.en;
            } else if (currentLang === "tr" && el.dataset.tr) {
                el.innerHTML = el.dataset.tr;
            }
        });
        
        // Update button text
        if(langToggleBtn) {
            langToggleBtn.textContent = currentLang === "tr" ? "EN" : "TR";
        }
    }

    if(langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "tr" ? "en" : "tr";
            updateLanguageCards();
        });
    }

    // 6. Tema Değişimi
    const themeToggleBtn = document.getElementById("theme-toggle");
    let isLightMode = false;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            isLightMode = !isLightMode;
            if (isLightMode) {
                document.documentElement.setAttribute("data-theme", "light");
                themeToggleBtn.innerHTML = '<i data-feather="moon"></i>';
                if(window.vantaEffect) window.vantaEffect.setOptions({ backgroundColor: 0xf8fafc, color: 0x059669 });
            } else {
                document.documentElement.removeAttribute("data-theme");
                themeToggleBtn.innerHTML = '<i data-feather="sun"></i>';
                if(window.vantaEffect) window.vantaEffect.setOptions({ backgroundColor: 0x060b13, color: 0x00f0ad });
            }
            feather.replace(); // İkonları tekrar render et
        });
    }

    // 7. Vanta.js 3D Neural Network Background
    if (typeof VANTA !== "undefined" && document.getElementById("vanta-bg")) {
        window.vantaEffect = VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00f0ad,          // Zümrüt (Emerald) - noktalar ve ağlar
            backgroundColor: 0x060b13, // Koyu Gece Mavisi (Karanlık mod arka planı)
            points: 12.00,            // Ağ noktası yoğunluğu
            maxDistance: 22.00,
            spacing: 18.00,
            showDots: true
        });
    }

    // 7. Vanilla-Tilt Initialization
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".glass-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.15,
        });
    }

    // 8. Custom Cursor 
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    
    // Yalnızca fare/trackpad kullanılan (dokunmatik olmayan) cihazlarda çalışsın
    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Gerçek zamanlı küçük nokta
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Yumuşak takipli ana halka
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hovered');
                cursorOutline.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hovered');
                cursorOutline.classList.remove('hovered');
            });
        });
    }

    // 9. Magnetic Buttons (Mıknatıs Etkisi)
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const position = el.getBoundingClientRect();
            // Mouse'un elemanın merkezine olan uzaklığı
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });

});
