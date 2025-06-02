// Hamburger menu toggle for mobile
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// Typing effect for the words
const words = ["Introvert", "Developer", "Photographer", "Editor", "Learner"];
let i = 0;
const span = document.querySelector(".typing-text span");
function changeWord() {
  if (span) {
    span.textContent = words[i];
    i = (i + 1) % words.length;
  }
}
changeWord();
setInterval(changeWord, 2000);
