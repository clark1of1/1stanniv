// 🔐 SECRET CODE
const SECRET_CODE = "143";

// 💬 Love messages popup
const messages = [
  "I’m so lucky to have you 🤍",
  "You’re my favorite person 👑",
  "Every day with you is special 💕",
  "I choose you. Always.",
  "You are my home 🤍"
];

// ✍️ Typewriter text
const letterText =
  "My Queen, from the moment we met, my life changed in the most beautiful way. " +
  "Knowing you, loving you, and choosing you has been my greatest joy. " +
  "Happy 1st anniversary, my love 💙";
let i = 0; // Must be declared before typeWriter() is called
let typingStarted = false;

// 📅 Dates
const knownDate = new Date("2024-10-05");
const togetherDate = new Date("2024-12-28");
const today = new Date();

const knownDays = Math.ceil((today - knownDate) / (1000 * 60 * 60 * 24));
const togetherDays = Math.ceil((today - togetherDate) / (1000 * 60 * 60 * 24));

document.getElementById("knownDays").innerText =
  `We’ve known each other for ${knownDays} days 💙`;

document.getElementById("togetherDays").innerText =
  `We’ve been together for ${togetherDays} beautiful days 💙`;

// 🔐 Auto-unlock if already unlocked
if (localStorage.getItem("unlocked") === "true") {
  showSite();
}

// 🔐 Unlock function
function unlock() {
  const input = document.getElementById("codeInput").value;
  if (input === SECRET_CODE) {
    localStorage.setItem("unlocked", "true");
    showSite();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

// Show main site
function showSite() {
  document.getElementById("lockScreen").style.display = "none";
  document.getElementById("siteContent").style.display = "block";

  startHearts();
  startPopups();

  if (!typingStarted) {
    typingStarted = true;
    document.getElementById("typewriter").innerHTML = "";
    typeWriter();
  }
}

// ✍️ Typewriter
function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("typewriter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// 🌙 Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// 💝 Surprise reveal
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
  }, 400);
}

// 💕 Tap-to-spawn hearts
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
function startPopups() {
  setInterval(() => {
    const popup = document.getElementById("popup");
    popup.innerText = messages[Math.floor(Math.random() * messages.length)];
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 3000);
  }, 10000);
}
// Photo memory click-to-next
const photoList = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg",
    "images/photo13.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg",
    "images/photo16.jpg",
    "images/photo17.jpg",
    "images/photo18.jpg",
    "images/photo19.jpg",
    "images/photo20.jpg",
    "images/photo21.jpg",
    "images/photo22.jpg",
    "images/photo23.jpg",
    "images/photo24.jpg",
    "images/photo25.jpg"
  // Add all image paths here
];

let currentPhotoIndex = 0;
const memoryPhoto = document.getElementById("memoryPhoto");
const photoContainer = document.querySelector(".photo-container");

photoContainer.addEventListener("click", () => {
  // Animate click
  memoryPhoto.classList.add("clicking");
  setTimeout(() => memoryPhoto.classList.remove("clicking"), 150);

  // Clone current photo as previous and keep stack
  const oldPhoto = memoryPhoto.cloneNode();
  oldPhoto.classList.add("previous");
  photoContainer.appendChild(oldPhoto);

  // Move to next photo
  currentPhotoIndex = (currentPhotoIndex + 1) % photoList.length;
  memoryPhoto.src = photoList[currentPhotoIndex];

  // Adjust stacking: keep only 5 previous photos visible
  const previousPhotos = photoContainer.querySelectorAll(".previous");
  if (previousPhotos.length > 5) previousPhotos[0].remove();
});