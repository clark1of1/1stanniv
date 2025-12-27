// Anniversary counter
const startDate = new Date("2024-01-01"); // CHANGE THIS DATE
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText =
  `We’ve been together for ${diffDays} beautiful days 🤍`;

// Typewriter letter
const letterText =
  "One year ago, I had no idea how much you would change my life. " +
  "You make ordinary days feel special, and I’m grateful for every moment with you. " +
  "Here’s to us, to love, and to many more anniversaries 🤍";

let i = 0;
function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("typewriter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Surprise reveal
function reveal() {
  document.getElementById("secret").style.display = "block";
}
