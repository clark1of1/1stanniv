// 🔐 SECRET CODE
const SECRET_CODE = "143";

// Unlock
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
const startDate = new Date("2024-01-01");
const today = new Date();
const diffDays = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText =
  `King & Queen have been together for ${diffDays} beautiful days 🤍`;

// Typewriter
const letterText =
  "My Queen, loving you has been the easiest and most beautiful thing I’ve ever done. " +
  "Thank you for choosing me every day. Happy first anniversary 🤍";

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

// Surprise
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

// 💗 Heart cursor trail
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.innerHTML = "♡";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
