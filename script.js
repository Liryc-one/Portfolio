// script.js

// Typing effect for hero section document.addEventListener("DOMContentLoaded", function () { new TypeIt("#typewriter", { speed: 50, loop: true, waitUntilVisible: true, }) .type("Hi, I'm Liryc.", { delay: 600 }) .break() .type("Web Developer | Blockchain Builder", { delay: 1000 }) .delete(null, { delay: 1500 }) .go(); });

// Optional: Scroll fade-in animation const fadeIns = document.querySelectorAll('.fade-in'); const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-fade-in'); } }); }, { threshold: 0.1 });

fadeIns.forEach(el => observer.observe(el));

// Optional: Dark mode toggle (expand if needed) // const toggle = document.getElementById('darkmode-toggle'); // toggle.addEventListener('click', () => { //   document.body.classList.toggle('dark-mode'); // });
// Reveal fade-in elements on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only run once
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
const terminalOutput = document.getElementById('terminal-output'); const commandInput = document.getElementById('command-input');

const commands = { help: `Available commands:

help

about

skills

projects

certifications

blog

contact

stats

clear`,


about: I'm Cyril, a blockchain developer and smart contract engineer. I specialize in DeFi, NFTs, and full-stack development using technologies like Move, Solidity, Sui, React, and Node.js.,

skills: `Tech Stack:

JavaScript, Solidity, Move

React, Node.js, Firebase

Git, MongoDB, TailwindCSS`,


projects: ~/portfolio ├── ai-moviebot ├── dividend-app └── hacker-portfolio,

certifications: [✓] Certified Solidity Developer - ChainLearn, 2025 [✓] Web3 Smart Contract Expert - DevDAO Academy,

blog: `> July 2025 | Debugged a major Web3 minting flow.

> June 2025 | Launched AI-integrated MovieBot using GPT APIs.`,



contact: Email: cyril.codes@pm.me GitHub: https://github.com/Liryc-one,

stats: `> Projects Completed: ██████████░░ 90%

> Bugs Fixed: ████████████░░ 95% Hackathons Attended: █████░░ 60%`,



clear: 'CLEAR_SCREEN' };

commandInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') { const input = commandInput.value.trim(); const commandLine = document.createElement('div'); commandLine.innerHTML = <span class="prompt">$</span> ${input}; terminalOutput.appendChild(commandLine);

if (commands[input]) {
  if (commands[input] === 'CLEAR_SCREEN') {
    terminalOutput.innerHTML = '';
  } else {
    const outputLine = document.createElement('div');
    outputLine.textContent = commands[input];
    terminalOutput.appendChild(outputLine);
  }
} else {
  const errorLine = document.createElement('div');
  errorLine.textContent = `Command not found: ${input}`;
  terminalOutput.appendChild(errorLine);
}

commandInput.value = '';
terminalOutput.scrollTop = terminalOutput.scrollHeight;

} });

