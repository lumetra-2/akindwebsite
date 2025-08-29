


// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu').querySelector('ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});



// 🎯 Target all sections with "overview" class
const overviews = document.querySelectorAll(".overview");

// Function to check if section is visible on screen
function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85; // 85% of screen height

  overviews.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");   // 👀 Add animation when visible
    } else {
      section.classList.remove("show"); // ❌ Remove to re-trigger on scroll
      // 👉 If you want animation only once, delete the line above
    }
  });
}

// Run once on load and again whenever scrolling
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);










// Animate progress bars on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar");

  const animateBars = () => {
    progressBars.forEach(bar => {
      const target = bar.getAttribute("data-skill");
      bar.style.width = target + "%";
      bar.textContent = target + "%";
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars();
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);
});



















