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
let j = 0;
let isDeleting = false;
const span = document.querySelector(".typing-text span");

function type() {
  if (!span) return;
  const current = words[i];
  if (isDeleting) {
    span.textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 400);
    } else {
      setTimeout(type, 60);
    }
  } else {
    span.textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 120);
    }
  }
}
type();
