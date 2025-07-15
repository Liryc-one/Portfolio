// === Typing Effect in Hero Section === window.addEventListener('DOMContentLoaded', () => { const heroText = document.querySelector('.hero h2'); const message = "Hello, I'm Cyril"; let index = 0;

function type() { if (index < message.length) { heroText.textContent += message.charAt(index); index++; setTimeout(type, 100); } }

heroText.textContent = ""; type(); });

// === Smooth Scroll for Navigation === document.querySelectorAll('nav a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { window.scrollTo({ top: target.offsetTop - 50, behavior: 'smooth' }); } }); });

// === Reveal on Scroll === const sections = document.querySelectorAll('section'); const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } }); }, { threshold: 0.1 });

sections.forEach(section => { section.classList.add('hidden'); observer.observe(section); });

// === Project Modal === document.querySelectorAll('.project').forEach(project => { project.addEventListener('click', () => { const modal = project.querySelector('.modal'); if (modal) { modal.classList.add('show'); } }); });

document.querySelectorAll('.modal .close').forEach(btn => { btn.addEventListener('click', (e) => { e.stopPropagation(); btn.closest('.modal').classList.remove('show'); }); });

// === Dark/Light Mode Toggle === document.addEventListener('DOMContentLoaded', () => { const toggleBtn = document.createElement('button'); toggleBtn.textContent = '🌓 Toggle Theme'; toggleBtn.className = 'theme-toggle'; document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => { document.body.classList.toggle('light-mode'); }); });

// === Animated Stats Counter === function animateCounters() { const counters = document.querySelectorAll('.stat-number'); counters.forEach(counter => { const target = +counter.getAttribute('data-target'); let current = 0; const step = Math.ceil(target / 100);

const update = () => {
  current += step;
  if (current > target) current = target;
  counter.textContent = current;
  if (current < target) requestAnimationFrame(update);
};

update();

}); }

const statsSection = document.querySelector('#stats'); if (statsSection) { const statsObserver = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { animateCounters(); statsObserver.disconnect(); } }, { threshold: 0.4 });

statsObserver.observe(statsSection); }

// === Page Loader === window.addEventListener('load', () => { const loader = document.querySelector('.loader-wrapper'); if (loader) { loader.classList.add('fade-out'); setTimeout(() => loader.remove(), 1000); } });

