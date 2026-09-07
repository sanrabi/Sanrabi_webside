/**
 * SANRABI Technologies — Enterprise Redesign Logic
 * Mobile Application & Backend Engineering Studio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Clean Glass Navbar on Scroll
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Active Nav Link Tracking on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // 4. Contact Form Submission Handling
  const contactForm = document.getElementById('appInquiryForm');
  const formStatus = document.getElementById('formStatusMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const details = document.getElementById('projectDetails').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!name || !email || !details) {
        if (formStatus) {
          formStatus.innerHTML = '<span style="color:#EF4444; font-size:13px; font-weight:600;">Please fill in your name, work email, and project details.</span>';
        }
        return;
      }

      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmitting...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (formStatus) {
          formStatus.innerHTML = '<div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:10px; padding:14px; color:#1D4ED8; font-weight:600; text-align:center; font-size:14px;">' +
            '✓ Thank you! Your mobile application inquiry has been received. Our solutions team will reach out within 24 hours.' +
            '</div>';
        }
      }, 900);
    });
  }

  // 5. Scroll Fade-In Reveal Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    revealObserver.observe(el);
  });
});
