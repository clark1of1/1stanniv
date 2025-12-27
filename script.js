// 🔐 SECRET CODE
const SECRET_CODE = "143";

// Auto-unlock if already unlocked
if (localStorage.getItem("unlocked") === "true") {
  showSite();
}

function unlock() {
  const input = document.getElementById("codeInput").value;
  if (input === SECRET_CODE) {
    localStorage.setItem("unlocked", "true");
    showSite();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

function showSite() {
  document.getElementById("lockScreen").style.display = "none";
  document.getElementById("siteContent").style.display = "block";
  startHearts();
  typeWriter();
}

// 📅 Dates
const knownDate = new Date("2024-10-05");
const togetherDate = new Date("2024-12-28");
const today = new Date();

const knownDays = Math.ceil((today - knownDate) / (1000 * 60 * 60 * 24));
const togetherDays = Math.ceil((today - togetherDate) / (1000 * 60 * 60 * 24));

document.getElementById("knownDays").innerText =
  `We’ve known each other for ${knownDays} days 🤍`;

document.getElementById("togetherDays").innerText =
  `We’ve been together for ${togetherDays} beautiful days 🤍`;

// ✍️ Typewriter
const letterText =
  "My Queen, from the moment we met, my life changed in the most beautiful way. " +
  "Knowing you, loving you, and choosing you has been my greatest joy. " +
  "Happy first anniversary 🤍";

let i = 0;
function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("typewriter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// 🌙 Dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// 💝 Surprise
function reveal() {
  document.getElementById("secret").style.display = "block";
}

// 💕 Floating hearts background
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 350);
}

// 💕 Tap-to-spawn hearts (mobile)
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "tap-heart";
  heart.innerHTML = "♡";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

// 💬 Love messages popup
const messages = [
  "I’m so lucky to have you 🤍",
  "You’re my favorite person 👑",
  "Every day with you is special 💕",
  "I choose you. Always.",
  "You are my home 🤍"
];

setInterval(() => {
  const popup = document.getElementById("popup");
  popup.innerText = messages[Math.floor(Math.random() * messages.length)];
  popup.classList.add("show");

  setTimeout(() => popup.classList.remove("show"), 3000);
}, 12000);
