// NAVBAR HAMBURGER TOGGLE
const hamburger = document.getElementById('hamburger');
const mobileSidebar = document.getElementById('mobileSidebar');

if (hamburger && mobileSidebar) {
    const icon = hamburger.querySelector('i');

    hamburger.addEventListener('click', () => {
        mobileSidebar.classList.toggle('active');

        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    const navLinks = mobileSidebar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
            icon.classList.replace('fa-xmark', 'fa-bars');
        });
    });
}

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector('.pricing-navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// FEATURES SCROLL DOTS
const container = document.querySelector('.features-container');
const dotsContainer = document.getElementById('dots');

if (container && dotsContainer) {
    const cards = container.querySelectorAll('.card');

    cards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    container.addEventListener('scroll', () => {
        const cardWidth = cards[0].offsetWidth + 16;
        const index = Math.round(container.scrollLeft / cardWidth);

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    });
}

// PAYMENT INSTRUCTIONS TOGGLE
function togglePaymentInfo() {
    const content = document.getElementById('paymentContent');
    const icon = document.getElementById('toggleIcon');
    const progressFill = document.getElementById('progressFill');

    if (content && icon && progressFill) {
        const show = !content.classList.contains('show');
        content.classList.toggle('show', show);
        icon.classList.toggle('expanded', show);
        progressFill.style.width = show ? '100%' : '0%';
    }
}

// PAYMENT STEP HOVER EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.payment-step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateX(8px)';
        });
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateX(4px)';
        });
    });
});

// CONTACT FORM SUBMISSION
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(contactForm).entries());
        contactForm.reset();
        console.log("Form submitted:", data);
    });
}

// ENTRANCE ANIMATIONS
window.addEventListener('load', () => {
    document.querySelectorAll('.contact-section, .whatsapp-section, .payment-section')
        .forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            setTimeout(() => {
                section.style.transition = 'all 0.6s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
});