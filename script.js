// Change this to your actual anniversary start date
const startDate = new Date("2024-01-01");
const today = new Date();

const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText =
  `We’ve been together for ${diffDays} beautiful days 🤍`;
