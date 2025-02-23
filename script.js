/***** Terminal Typewriter Effect *****/
const terminalText = `
Initializing system...
Loading kernel modules...
Starting core services...
Mounting filesystems...
Connecting to secure nodes...
Decrypting sensitive data...
Establishing secure connection...
Verifying credentials...
Access granted.
Finalizing startup sequence...
Reading configuration files...
Initializing AI subsystems...
Loading encryption keys...
Activating firewalls...
All systems operational.
System ready. Launching interface...
`;

let index = 0;
const terminalDiv = document.getElementById('terminal');

function typeTerminal() {
  if (index < terminalText.length) {
    const char = terminalText.charAt(index);
    terminalDiv.innerHTML += char;
    index++;
    // Delay between characters: 10-30ms, extra delay at newline.
    let delay = 10 + Math.random() * 20;
    if (char === "\n") { delay += 50; }
    setTimeout(typeTerminal, delay);
  } else {
    terminalDiv.innerHTML += '<span class="cursor"></span>';
    // After finishing the terminal text, wait a bit then fade out the intro overlay.
    setTimeout(() => {
      const introDiv = document.getElementById('intro');
      introDiv.style.transition = 'opacity 1s ease-out';
      introDiv.style.opacity = '0';
      setTimeout(() => {
        introDiv.style.display = 'none';
        // Reveal main content.
        const mainContent = document.getElementById('mainContent');
        mainContent.style.display = 'block';
        // Trigger a fade-in by adding the "show" class.
        setTimeout(() => { mainContent.classList.add('show'); }, 50);
      }, 1000);
    }, 2000);
  }
}

setTimeout(typeTerminal, 500);

/***** Matrix Rain Effect *****/
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrixLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
const matrixFontSize = 16;
const columns = Math.floor(canvas.width / matrixFontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff00";
  ctx.font = matrixFontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = matrixLetters.charAt(Math.floor(Math.random() * matrixLetters.length));
    ctx.fillText(text, i * matrixFontSize, drops[i] * matrixFontSize);
    if (drops[i] * matrixFontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);
