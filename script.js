// script.js

// Typing effect for hero section document.addEventListener("DOMContentLoaded", function () { new TypeIt("#typewriter", { speed: 50, loop: true, waitUntilVisible: true, }) .type("Hi, I'm Liryc.", { delay: 600 }) .break() .type("Web Developer | Blockchain Builder", { delay: 1000 }) .delete(null, { delay: 1500 }) .go(); });

// Optional: Scroll fade-in animation const fadeIns = document.querySelectorAll('.fade-in'); const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-fade-in'); } }); }, { threshold: 0.1 });

fadeIns.forEach(el => observer.observe(el));

// Optional: Dark mode toggle (expand if needed) // const toggle = document.getElementById('darkmode-toggle'); // toggle.addEventListener('click', () => { //   document.body.classList.toggle('dark-mode'); // });
