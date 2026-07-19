/* ===================================
   PORTFOLIO JAVASCRIPT
   All functionality with vanilla JS
   =================================== */

// ===================================
// 1. NAVIGATION & SCROLL SPY
// ===================================

class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section');
        this.hamburger = document.querySelector('.hamburger');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        
        this.init();
    }

    init() {
        // Sticky navbar on scroll
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Hamburger menu toggle
        this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu on link click
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Scroll spy - highlight active nav link
        window.addEventListener('scroll', () => this.updateActiveLink());

        // Smooth scroll for nav links
        this.setupSmoothScroll();
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
    }

    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.mobileMenu.classList.remove('active');
    }

    updateActiveLink() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            this.mobileNavLinks.forEach(mobileLink => {
                mobileLink.classList.remove('active');
            });
        });

        if (current) {
            document.querySelector(`.nav-link[href="#${current}"]`)?.classList.add('active');
            document.querySelector(`.mobile-nav-link[href="#${current}"]`)?.classList.add('active');
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ===================================
// 2. TYPING ANIMATION
// ===================================

class TypingAnimation {
    constructor() {
        this.typingText = document.querySelector('.typing-text');
        this.cursor = document.querySelector('.cursor');
        this.words = [
            'Full Stack Developer',
            'Problem Solver',
            'Tech Enthusiast',
            'Creative Coder'
        ];
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.speed = 100;
        this.deleteSpeed = 50;
        this.delayBetweenWords = 2000;

        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.typingText.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.typingText.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let speed = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            speed = this.delayBetweenWords;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
        }

        setTimeout(() => this.type(), speed);
    }
}

// ===================================
// 3. REVEAL ON SCROLL
// ===================================

class RevealOnScroll {
    constructor() {
        this.reveals = document.querySelectorAll('.reveal-on-scroll');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        this.reveals.forEach(reveal => {
            observer.observe(reveal);
        });
    }
}

// ===================================
// 4. SKILL BARS ANIMATION
// ===================================

class SkillBars {
    constructor() {
        this.progressBars = document.querySelectorAll('.progress-fill');
        this.animated = false;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.animateOnScroll());
    }

    animateOnScroll() {
        if (this.animated) return;

        const skillsSection = document.querySelector('#skills');
        if (!skillsSection) return;

        const rect = skillsSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            this.animate();
            this.animated = true;
        }
    }

    animate() {
        this.progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            let current = 0;
            const increment = parseInt(width) / 30;

            const counter = setInterval(() => {
                current += increment;
                if (current >= parseInt(width)) {
                    current = parseInt(width);
                    clearInterval(counter);
                }
                bar.style.width = current + '%';
            }, 30);
        });
    }
}

// ===================================
// 5. BUTTON RIPPLE EFFECT
// ===================================

class RippleEffect {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => this.createRipple(e));
        });
    }

    createRipple(event) {
        const button = event.currentTarget;
        const ripple = button.querySelector('.ripple');

        if (!ripple) return;

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = ripple.cloneNode(true);
        newRipple.style.width = newRipple.style.height = size + 'px';
        newRipple.style.left = x + 'px';
        newRipple.style.top = y + 'px';

        button.appendChild(newRipple);

        setTimeout(() => newRipple.remove(), 600);
    }
}

// ===================================
// 6. CONTACT FORM VALIDATION
// ===================================

class ContactForm {
    constructor() {
        this.form = document.querySelector('#contactForm');
        this.nameInput = document.querySelector('#name');
        this.emailInput = document.querySelector('#email');
        this.subjectInput = document.querySelector('#subject');
        this.messageInput = document.querySelector('#message');
        this.successMessage = document.querySelector('#successMessage');

        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // Clear previous errors
        this.clearErrors();

        // Validate form
        if (this.validateForm()) {
            this.showSuccess();
            this.form.reset();
            setTimeout(() => {
                this.hideSuccess();
            }, 5000);
        }
    }

    validateForm() {
        let isValid = true;

        // Name validation
        if (!this.nameInput.value.trim()) {
            this.showError('nameError', 'Name is required');
            isValid = false;
        } else if (this.nameInput.value.trim().length < 2) {
            this.showError('nameError', 'Name must be at least 2 characters');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.emailInput.value.trim()) {
            this.showError('emailError', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(this.emailInput.value.trim())) {
            this.showError('emailError', 'Please enter a valid email');
            isValid = false;
        }

        // Subject validation
        if (!this.subjectInput.value.trim()) {
            this.showError('subjectError', 'Subject is required');
            isValid = false;
        } else if (this.subjectInput.value.trim().length < 3) {
            this.showError('subjectError', 'Subject must be at least 3 characters');
            isValid = false;
        }

        // Message validation
        if (!this.messageInput.value.trim()) {
            this.showError('messageError', 'Message is required');
            isValid = false;
        } else if (this.messageInput.value.trim().length < 10) {
            this.showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }

        return isValid;
    }

    showError(elementId, message) {
        const errorElement = document.querySelector(`#${elementId}`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    clearErrors() {
        const errors = document.querySelectorAll('.form-error');
        errors.forEach(error => {
            error.textContent = '';
            error.classList.remove('show');
        });
    }

    showSuccess() {
        this.successMessage.classList.add('show');
    }

    hideSuccess() {
        this.successMessage.classList.remove('show');
    }
}

// ===================================
// 7. RESUME TABS
// ===================================

class ResumeTabs {
    constructor() {
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');

        this.init();
    }

    init() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => this.switchTab(button));
        });
    }

    switchTab(button) {
        // Remove active from all buttons and contents
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        this.tabContents.forEach(content => content.classList.remove('active'));

        // Add active to clicked button
        button.classList.add('active');

        // Show corresponding content
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.querySelector(`#${tabId}`);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    }
}

// ===================================
// 8. SCROLL PROGRESS BAR
// ===================================

class ScrollProgress {
    constructor() {
        this.progressBar = document.querySelector('.scroll-progress');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        this.progressBar.style.width = scrolled + '%';
    }
}

// ===================================
// 9. BACK TO TOP BUTTON
// ===================================

class BackToTop {
    constructor() {
        this.button = document.querySelector('#backToTop');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.toggleButton());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleButton() {
        if (window.scrollY > 300) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ===================================
// 10. DOWNLOAD BUTTONS
// ===================================

class DownloadButtons {
    constructor() {
        this.downloadBtn = document.querySelector('#downloadBtn');
        this.downloadResumeBtn = document.querySelector('#downloadResumeBtn');
        this.contactBtn = document.querySelector('#contactBtn');

        this.init();
    }

    init() {
        if (this.downloadBtn) {
            this.downloadBtn.addEventListener('click', () => this.downloadResume());
        }

        if (this.downloadResumeBtn) {
            this.downloadResumeBtn.addEventListener('click', () => this.downloadResume());
        }

        if (this.contactBtn) {
            this.contactBtn.addEventListener('click', () => this.scrollToContact());
        }
    }

    downloadResume() {
        // Create a link to your resume PDF
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'Aarthi_Resume.pdf';
        link.click();
    }

    scrollToContact() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// ===================================
// 11. FOOTER YEAR
// ===================================

class FooterYear {
    constructor() {
        this.yearElement = document.querySelector('#year');
        this.init();
    }

    init() {
        if (this.yearElement) {
            this.yearElement.textContent = new Date().getFullYear();
        }
    }
}

// ===================================
// 12. LAZY LOADING IMAGES
// ===================================

class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ===================================
// 13. CARD HOVER EFFECTS
// ===================================

class CardHoverEffects {
    constructor() {
        this.cards = document.querySelectorAll('.about-card, .skill-category, .contact-card, .timeline-content');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
        });
    }

    handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 3;
        const rotateY = ((centerX - x) / centerX) * 3;

        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }

    handleMouseLeave(e) {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

// ===================================
// 13. MOUSE GLOW EFFECT
// ===================================

class MouseGlow {
    constructor() {
        this.homeSection = document.querySelector('.home');
        this.glow = document.createElement('div');
        this.init();
    }

    init() {
        if (this.homeSection) {
            this.glow.style.cssText = `
                position: fixed;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
                pointer-events: none;
                z-index: 1;
                display: none;
                border-radius: 50%;
            `;
            document.body.appendChild(this.glow);

            this.homeSection.addEventListener('mousemove', (e) => this.updateGlow(e));
            this.homeSection.addEventListener('mouseleave', () => this.hideGlow());
        }
    }

    updateGlow(e) {
        this.glow.style.display = 'block';
        this.glow.style.left = (e.clientX - 50) + 'px';
        this.glow.style.top = (e.clientY - 50) + 'px';
    }

    hideGlow() {
        this.glow.style.display = 'none';
    }
}

// ===================================
// 14. FORM INPUT FOCUS EFFECTS
// ===================================

class FormEffects {
    constructor() {
        this.inputs = document.querySelectorAll('.form-input');
        this.init();
    }

    init() {
        this.inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.2)';
            });

            input.addEventListener('blur', () => {
                input.parentElement.style.boxShadow = 'none';
            });
        });
    }
}

// ===================================
// 15. ANIMATION PERFORMANCE
// ===================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Use requestAnimationFrame for smooth animations
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                function(callback) {
                    return setTimeout(callback, 1000 / 60);
                };
        }

        // Detect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            document.body.classList.add('reduce-motion');
        }
    }
}

// ===================================
// 16. INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new Navigation();
    new TypingAnimation();
    new RevealOnScroll();
    new SkillBars();
    new RippleEffect();
    new ContactForm();
    new ResumeTabs();
    new ScrollProgress();
    new BackToTop();
    new DownloadButtons();
    new FooterYear();
    new LazyLoadImages();
    new MouseGlow();
    new FormEffects();
    new CardHoverEffects();
    new PerformanceOptimizer();

    console.log('Portfolio initialized successfully!');
});

// ===================================
// 17. UTILITY FUNCTIONS
// ===================================

// Smooth scroll fallback for older browsers
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const startPosition = window.scrollY;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Random color generator
function getRandomColor() {
    const colors = ['#3B82F6', '#06B6D4', '#8B5CF6', '#22C55E'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// ===================================
// 18. ERROR HANDLING
// ===================================

window.addEventListener('error', (event) => {
    console.error('Error:', event.message);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
});
