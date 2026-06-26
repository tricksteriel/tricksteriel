/* ─── Custom Cursor ─────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
})();

document.querySelectorAll('a, button, [data-hover]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
    follower.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
    follower.classList.remove('hovering');
  });
});

/* ─── Nav Scroll Effect ─────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── Theme Toggle ──────────────────────────────────────────── */
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('.theme-icon');

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.textContent = '○';
}

themeBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    themeIcon.textContent = '◑';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.textContent = '○';
  }
});

/* ─── Scroll Reveal ─────────────────────────────────────────── */
const revealTargets = [
  '.hero-tag',
  '.hero-title',
  '.hero-desc',
  '.hero-actions',
  '.about-visual',
  '.about-text',
  '.project-card',
  '.skill-item',
  '.tool-item',
  '.contact-inner',
  '.section-header',
];

const allReveal = [];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    if (i > 0 && i <= 4) el.classList.add(`reveal-delay-${i}`);
    allReveal.push(el);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

allReveal.forEach(el => observer.observe(el));

/* ─── Tool Bars Animation ───────────────────────────────────── */
const toolsSection = document.querySelector('.tools-section');
let toolsAnimated = false;

const toolsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !toolsAnimated) {
    toolsAnimated = true;
    document.querySelectorAll('.tool-fill').forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = bar.style.width; // trigger reflow
        const target = bar.style.width;
        bar.style.width = '0';
        requestAnimationFrame(() => {
          bar.style.width = target;
        });
      }, i * 80);
    });
  }
}, { threshold: 0.3 });

if (toolsSection) toolsObserver.observe(toolsSection);

/* ─── Active Nav Link ───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--text)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => sectionObserver.observe(section));

/* ─── Smooth anchor scroll ──────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── Hero text stagger on load ─────────────────────────────── */
window.addEventListener('load', () => {
  const heroItems = document.querySelectorAll('.hero-tag, .hero-title, .hero-desc, .hero-actions');
  heroItems.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.8s ease ${0.1 + i * 0.15}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.15}s`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });

  // Trigger tool bars if already visible
  if (toolsSection) {
    const rect = toolsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      toolsAnimated = true;
      document.querySelectorAll('.tool-fill').forEach((bar, i) => {
        setTimeout(() => {
          const target = bar.getAttribute('style').match(/width:\s*([^;]+)/)?.[1] || '0';
          bar.style.width = '0';
          requestAnimationFrame(() => { bar.style.width = target; });
        }, i * 80);
      });
    }
  }
});
