/* =====================================================
   TRAINERS VAULT LLC — script.js
   =====================================================
   You generally do NOT need to edit this file.
   All text/content changes should be in index.html.
   All color/style changes should be in styles.css.
   ===================================================== */

/* ---- LOADER ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1200);
});

/* ---- NAVBAR: scroll effect + mobile toggle ---- */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  // Back to top button
  const btn = document.getElementById('backToTop');
  if (btn) {
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- SMOOTH SCROLL for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- FADE-IN ON SCROLL (Intersection Observer) ---- */
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

/* ---- HERO PARTICLES ---- */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ---- FAQ ACCORDION ---- */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- CONTACT FORM (Formspree) ---- */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formSuccess.textContent = '✅ Message sent! We\'ll get back to you soon.';
        formSuccess.className = 'form-success show ok';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      // Fallback: if Formspree isn't set up yet, show helpful message
      formSuccess.textContent = '⚠️ Form not configured yet. Email us directly at trainersvaultllc@yahoo.com';
      formSuccess.className = 'form-success show err';
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 6000);
    }
  });
}

/* ---- BACK TO TOP ---- */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- AUTO YEAR in footer ---- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- ACTIVE NAV LINK on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--color-red)';
    }
  });
});
