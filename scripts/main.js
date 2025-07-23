// scripts/main.js

// Scroll to section on "Explore" click
document.addEventListener("DOMContentLoaded", () => {
  const scrollLink = document.querySelector(".scroll-down");
  const targetSection = document.querySelector("#services");

  if (scrollLink && targetSection) {
    scrollLink.addEventListener("click", (e) => {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Optional: Fade in elements on scroll
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    observer.observe(card);
  });
});
