const terminalOutput = document.getElementById('terminal-output'); const commandInput = document.getElementById('command-input');

const commands = { help: Available commands:\n  - help\n  - about\n  - skills\n  - projects\n  - certifications\n  - blog\n  - contact\n  - stats\n  - clear,

about: I'm Cyril, a blockchain developer and smart contract engineer. I specialize in DeFi, NFTs, and full-stack development using technologies like Move, Solidity, Sui, React, and Node.js.,

skills: Tech Stack:\n  - JavaScript, Solidity, Move\n  - React, Node.js, Firebase\n  - Git, MongoDB, TailwindCSS,

projects: ~/portfolio\n  ├── ai-moviebot\n  ├── dividend-app\n  └── hacker-portfolio,

certifications: [✓] Certified Solidity Developer - ChainLearn, 2025\n[✓] Web3 Smart Contract Expert - DevDAO Academy,

blog: > July 2025 | Debugged a major Web3 minting flow.\n> June 2025 | Launched AI-integrated MovieBot using GPT APIs.,

contact: Email: cyril.codes@pm.me\nGitHub: https://github.com/Liryc-one,

stats: > Projects Completed: ██████████░░ 90%\n> Bugs Fixed: ████████████░░ 95%\n> Hackathons Attended: █████░░ 60%,

clear: 'CLEAR_SCREEN' };

function appendOutput(text, className = '') { const line = document.createElement('div'); if (className) line.classList.add(className); line.textContent = text; terminalOutput.appendChild(line); }

commandInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') { const input = commandInput.value.trim(); if (input === '') return;

appendOutput(`$ ${input}`, 'fade-in');

if (commands[input]) {
  if (commands[input] === 'CLEAR_SCREEN') {
    terminalOutput.innerHTML = '';
  } else {
    commands[input].split('\n').forEach(line => appendOutput(line, 'fade-in'));
  }
} else {
  appendOutput(`Command not found: ${input}`, 'fade-in');
}

commandInput.value = '';
terminalOutput.scrollTop = terminalOutput.scrollHeight;

} });

  
