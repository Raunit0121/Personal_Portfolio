// ===== TYPING ANIMATION =====
const roles = [
  'Full Stack Web Developer',
  'Full Stack App Developer',
  'Java Developer',
  'Flutter Developer'
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length + 1) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

// ===== DARK / LIGHT THEME TOGGLE =====
const themeBtn = document.getElementById('themeToggle');
const icon = themeBtn.querySelector('i');

const saved = localStorage.getItem('theme') || 'light';
if (saved === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = el.dataset.width + '%';
      barObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(bar => barObserver.observe(bar));

// ===== SCROLL FADE-IN ANIMATION =====
const fadeEls = document.querySelectorAll(
  '.about-grid, .skill-card, .project-card, .timeline-item, .contact-grid'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));


const EMAILJS_PUBLIC_KEY   = 'wBqfJEQbvPArdE2fo';
const EMAILJS_SERVICE_ID   = 'service_h0z448u';
const EMAILJS_TEMPLATE_ID  = 'template_c9mctgj';

// Initialise EmailJS with your public key
emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm  = document.getElementById('contactForm');
const submitBtn    = document.getElementById('submitBtn');
const formStatus   = document.getElementById('formStatus');
const btnText      = submitBtn.querySelector('.btn-text');
const btnLoader    = submitBtn.querySelector('.btn-loader');

function setLoading(on) {
  submitBtn.disabled = on;
  btnText.hidden  = on;
  btnLoader.hidden = !on;
}

function showStatus(type, msg) {
  formStatus.className = 'form-status ' + type;
  formStatus.innerHTML = (type === 'success'
    ? '<i class="fas fa-check-circle"></i> '
    : '<i class="fas fa-exclamation-circle"></i> ') + msg;
  // auto-hide after 6 s
  setTimeout(() => { formStatus.className = 'form-status'; formStatus.innerHTML = ''; }, 6000);
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    field.classList.remove('error');
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }
  });
  const emailField = form.querySelector('[type="email"]');
  if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.classList.add('error');
    valid = false;
  }
  return valid;
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  formStatus.className = 'form-status';

  if (!validateForm(contactForm)) {
    showStatus('error-msg', 'Please fill in all required fields correctly.');
    return;
  }

  setLoading(true);

  try {
    // Build params explicitly — avoids template variable name mismatches
    const params = {
      from_name : document.getElementById('cf-name').value.trim(),
      reply_to  : document.getElementById('cf-email').value.trim(),
      subject   : document.getElementById('cf-subject').value.trim(),
      message   : document.getElementById('cf-message').value.trim(),
      to_email  : 'kumarraunit47@gmail.com',
    };

    const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
    console.log('EmailJS success:', res.status, res.text);
    showStatus('success', "Message sent! I'll get back to you soon.");
    contactForm.reset();
    contactForm.querySelectorAll('.error').forEach(f => f.classList.remove('error'));
  } catch (err) {
    console.error('EmailJS error:', err);
    showStatus('error-msg',
      'Something went wrong. Please email me directly at kumarraunit47@gmail.com');
  } finally {
    setLoading(false);
  }
});

// Clear error state on input
contactForm.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('error'));
});

// ===== SMOOTH NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
