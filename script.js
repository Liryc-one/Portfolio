// Theme Toggle const toggleButton = document.getElementById("theme-toggle"); const body = document.body;

// Load theme preference if (localStorage.getItem("theme") === "dark") { body.classList.add("dark-mode"); }

toggleButton.addEventListener("click", () => { body.classList.toggle("dark-mode"); const theme = body.classList.contains("dark-mode") ? "dark" : "light"; localStorage.setItem("theme", theme); });

// Trigger animations when visible const faders = document.querySelectorAll(".fade-in, .slide-up, .zoom-in");

const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => { entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add("appear"); observer.unobserve(entry.target); }); }, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

