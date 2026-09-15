document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMenu = () => {
    if (!toggle || !mobileMenu) return;
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.classList.remove('open');
  };

  const updateNavbar = () => navbar?.classList.toggle('scrolled', window.scrollY > 16);
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  toggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  const revealItems = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  const activateLink = () => {
    let current = 'home';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 180) current = section.id;
    });
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', activateLink, { passive: true });
  activateLink();

  const form = document.getElementById('appInquiryForm');
  const status = document.getElementById('formStatusMsg');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = ['clientName', 'clientEmail', 'projectDetails'].map((id) => document.getElementById(id));
    const invalidField = fields.find((field) => !field.value.trim() || !field.checkValidity());
    if (invalidField) {
      status.textContent = 'Please complete the required fields with a valid email address.';
      status.style.color = '#7d3a3a';
      invalidField.focus();
      return;
    }
    
    status.textContent = 'Thanks — your inquiry is ready to send. We will be in touch shortly.';
    status.style.color = '#79dd8d';
    form.reset();
    document.getElementById('typeFlutter').checked = true;
  });
});
