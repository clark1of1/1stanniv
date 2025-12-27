// 🔐 SECRET CODE (CHANGE THIS IF YOU WANT)
const SECRET_CODE = "143";

// Unlock logic
function unlock() {
  const input = document.getElementById("codeInput").value;
  if (input === SECRET_CODE) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
    startHearts();
    typeWriter();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

// Anniversary counter
const startDate = new Date("2024-01-01"); // CHANGE DATE
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText =
  `King & Queen have been together for ${diffDays} beautiful days 🤍`;

// Typewriter letter
const letterText =
  "My Queen, one year ago I had no idea you would become my everything. " +
  "You make every ordinary day feel magical, and I’m grateful for every moment with you. " +
  "Here’s to us, forever. 🤍";

let i = 0;
function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("typewriter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Surprise reveal
function reveal() {
  document.getElementById("secret").style.display = "block";
}

// 💕 Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 300);
}
