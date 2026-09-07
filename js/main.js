/**
 * SANRABI Technologies — Core Interactive Logic
 * Mobile Application Development Company Website
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Glass Navbar on Scroll
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Drawer Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any mobile link
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
    const scrollPos = window.scrollY + 140;
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

  // 4. Interactive Hero iPhone Screen Controls
  const screenInteractiveViews = document.querySelectorAll('.screen-view');
  const screenTabBtns = document.querySelectorAll('.mockup-tab-btn');

  if (screenTabBtns.length > 0) {
    screenTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        screenTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        screenInteractiveViews.forEach(view => {
          if (view.getAttribute('id') === targetView) {
            view.style.display = 'flex';
          } else {
            view.style.display = 'none';
          }
        });
      });
    });
  }

  // Biometric Face ID simulation inside mockup
  const faceIdBtn = document.getElementById('triggerFaceId');
  const faceIdFeedback = document.getElementById('faceIdFeedback');
  if (faceIdBtn && faceIdFeedback) {
    faceIdBtn.addEventListener('click', () => {
      faceIdFeedback.innerHTML = '<span style="color:#00F0FF;">Scanning Face ID...</span>';
      setTimeout(() => {
        faceIdFeedback.innerHTML = '<span style="color:#34D399;">✓ Biometric Verified (Secure Enclave)</span>';
      }, 700);
      setTimeout(() => {
        faceIdFeedback.innerHTML = 'Tap to Authenticate';
      }, 3200);
    });
  }

  // 5. Contact Form Submission & Validation
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
          formStatus.innerHTML = '<span style="color:#F87171;">Please fill in your name, email, and project details.</span>';
        }
        return;
      }

      // Simulate sending inquiry
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmitting...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (formStatus) {
          formStatus.innerHTML = '<div style="background:rgba(16,185,129,0.12); border:1px solid #10B981; border-radius:10px; padding:14px; color:#34D399; font-weight:600; text-align:center;">' +
            '✓ Thank you! Your mobile project inquiry has been received. Our iOS engineering team will review your specifications and reach out within 24 hours.' +
            '</div>';
        }
      }, 1000);
    });
  }

  // 6. Intersection Observer for Scroll Fade-In Elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
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
