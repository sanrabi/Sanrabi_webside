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

  // 7. Dedicated Face ID Test in Biometric View
  const authTestBtn = document.getElementById('authTestBtn');
  const authStatusText = document.getElementById('authStatusText');
  if (authTestBtn && authStatusText) {
    authTestBtn.addEventListener('click', () => {
      authStatusText.innerHTML = '<span style="color: #00F0FF;">Scanning Face ID...</span>';
      authTestBtn.disabled = true;
      setTimeout(() => {
        authStatusText.innerHTML = '<span style="color: #34D399;">✓ Face ID Verified via Secure Enclave</span>';
        authTestBtn.disabled = false;
      }, 900);
      setTimeout(() => {
        authStatusText.innerHTML = 'Ready to authenticate';
      }, 4000);
    });
  }

  // 8. 3D Tilt Effect on Service & Technology Cards
  const tiltCards = document.querySelectorAll('.service-card, .tech-card, .why-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // 9. Interactive Particle Constellation Canvas
  const canvas = document.getElementById('heroParticles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000, radius: 120 };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize, { passive: true });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.8 + 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Subtle mouse push
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 28000), 55);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw constellation links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    resize();
    animate();
  }

  // 10. Xcode IDE Interactive File Tab Switcher
  const xcodeTabs = document.querySelectorAll('.xcode-tab');
  const xcodeEditorContent = document.getElementById('xcodeEditorContent');

  const swiftCodeSnippets = {
    xcPayment: `
<div class="code-line"><span class="code-num">1</span><span class="code-content"><span class="swift-comment">// Handcrafted for sub-16ms 120Hz ProMotion frame rendering</span></span></div>
<div class="code-line"><span class="code-num">2</span><span class="code-content"><span class="swift-kw">import</span> <span class="swift-type">SwiftUI</span></span></div>
<div class="code-line"><span class="code-num">3</span><span class="code-content"><span class="swift-kw">import</span> <span class="swift-type">Combine</span></span></div>
<div class="code-line"><span class="code-num">4</span><span class="code-content"></span></div>
<div class="code-line"><span class="code-num">5</span><span class="code-content">@<span class="swift-type">MainActor</span></span></div>
<div class="code-line"><span class="code-num">6</span><span class="code-content"><span class="swift-kw">final class</span> <span class="swift-type">PaymentViewModel</span>: <span class="swift-type">ObservableObject</span> {</span></div>
<div class="code-line"><span class="code-num">7</span><span class="code-content">&nbsp;&nbsp;@<span class="swift-type">Published</span> <span class="swift-kw">private(set) var</span> walletBalance: <span class="swift-type">Decimal</span> = <span class="swift-str">42850.00</span></span></div>
<div class="code-line"><span class="code-num">8</span><span class="code-content">&nbsp;&nbsp;@<span class="swift-type">Published</span> <span class="swift-kw">private(set) var</span> settlements: [<span class="swift-type">Settlement</span>] = []</span></div>
<div class="code-line"><span class="code-num">9</span><span class="code-content"></span></div>
<div class="code-line"><span class="code-num">10</span><span class="code-content">&nbsp;&nbsp;<span class="swift-func">func</span> <span class="swift-func">syncTransactions</span>() <span class="swift-kw">async throws</span> {</span></div>
<div class="code-line"><span class="code-num">11</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="swift-kw">let</span> (data, response) = <span class="swift-kw">try await</span> <span class="swift-type">URLSession</span>.shared.data(from: endpoint)</span></div>
<div class="code-line"><span class="code-num">12</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="swift-kw">self</span>.settlements = <span class="swift-kw">try</span> <span class="swift-type">JSONDecoder</span>().decode([<span class="swift-type">Settlement</span>].<span class="swift-kw">self</span>, from: data)</span></div>
<div class="code-line"><span class="code-num">13</span><span class="code-content">&nbsp;&nbsp;}</span></div>
<div class="code-line"><span class="code-num">14</span><span class="code-content">}</span></div>`,
    xcBiometric: `
<div class="code-line"><span class="code-num">1</span><span class="code-content"><span class="swift-comment">// Bank-grade FaceID authentication via Apple LocalAuthentication</span></span></div>
<div class="code-line"><span class="code-num">2</span><span class="code-content"><span class="swift-kw">import</span> <span class="swift-type">LocalAuthentication</span></span></div>
<div class="code-line"><span class="code-num">3</span><span class="code-content"></span></div>
<div class="code-line"><span class="code-num">4</span><span class="code-content"><span class="swift-kw">struct</span> <span class="swift-type">BiometricGuard</span> {</span></div>
<div class="code-line"><span class="code-num">5</span><span class="code-content">&nbsp;&nbsp;<span class="swift-kw">static func</span> <span class="swift-func">evaluateFaceID</span>() <span class="swift-kw">async -> Bool</span> {</span></div>
<div class="code-line"><span class="code-num">6</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="swift-kw">let</span> context = <span class="swift-type">LAContext</span>()</span></div>
<div class="code-line"><span class="code-num">7</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="swift-kw">var</span> error: <span class="swift-type">NSError</span>?</span></div>
<div class="code-line"><span class="code-num">8</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="swift-kw">guard</span> context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) <span class="swift-kw">else</span> { <span class="swift-kw">return false</span> }</span></div>
<div class="code-line"><span class="code-num">9</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="swift-kw">return try await</span> context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: <span class="swift-str">"Authenticate to access Secure Enclave"</span>)</span></div>
<div class="code-line"><span class="code-num">10</span><span class="code-content">&nbsp;&nbsp;}</span></div>
<div class="code-line"><span class="code-num">11</span><span class="code-content">}</span></div>`,
    xcMotion: `
<div class="code-line"><span class="code-num">1</span><span class="code-content"><span class="swift-comment">// Custom Metal & SwiftUI 120Hz display link animation engine</span></span></div>
<div class="code-line"><span class="code-num">2</span><span class="code-content"><span class="swift-kw">import</span> <span class="swift-type">SwiftUI</span></span></div>
<div class="code-line"><span class="code-num">3</span><span class="code-content"><span class="swift-kw">import</span> <span class="swift-type">QuartzCore</span></span></div>
<div class="code-line"><span class="code-num">4</span><span class="code-content"></span></div>
<div class="code-line"><span class="code-num">5</span><span class="code-content"><span class="swift-kw">struct</span> <span class="swift-type">MotionEngine</span>: <span class="swift-type">ViewModifier</span> {</span></div>
<div class="code-line"><span class="code-num">6</span><span class="code-content">&nbsp;&nbsp;@<span class="swift-type">State</span> <span class="swift-kw">private var</span> phase: <span class="swift-type">CGFloat</span> = <span class="swift-str">0</span></span></div>
<div class="code-line"><span class="code-num">7</span><span class="code-content">&nbsp;&nbsp;<span class="swift-func">func</span> <span class="swift-func">body</span>(content: <span class="swift-type">Content</span>) -> <span class="swift-kw">some</span> <span class="swift-type">View</span> {</span></div>
<div class="code-line"><span class="code-num">8</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;content.scaleEffect(1 + sin(phase) * <span class="swift-str">0.02</span>)</span></div>
<div class="code-line"><span class="code-num">9</span><span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.animation(.interpolatingSpring(stiffness: <span class="swift-str">300</span>, damping: <span class="swift-str">15</span>), value: phase)</span></div>
<div class="code-line"><span class="code-num">10</span><span class="code-content">&nbsp;&nbsp;}</span></div>
<div class="code-line"><span class="code-num">11</span><span class="code-content">}</span></div>`
  };

  if (xcodeTabs.length > 0 && xcodeEditorContent) {
    xcodeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const snippetKey = tab.getAttribute('data-xcodescreen');
        xcodeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (swiftCodeSnippets[snippetKey]) {
          xcodeEditorContent.innerHTML = swiftCodeSnippets[snippetKey];
        }
      });
    });
  }
});

