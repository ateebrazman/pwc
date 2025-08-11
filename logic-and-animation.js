function loader() {
  // Create floating particles
  const particlesContainer = document.getElementById("particles");
  const particleCount = 40;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration and delay
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
}
// loader();
document.addEventListener("DOMContentLoaded", () => {
  // Search input toggle
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", () => {
      searchInput.classList.toggle("active");
      if (searchInput.classList.contains("active")) {
        searchInput.focus();
      }
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      menu.classList.toggle("open");
    });
  }
});

// Search input toggle functionality

function dropdown() {
  let downBtn = document.querySelector("#dropdown-btn");
  let downMenu = document.querySelector(".dropdown-menu");
  downBtn.addEventListener("mouseover", function (e) {
    e.preventDefault();
    downMenu.classList.toggle("active");
  });
  downMenu.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    downMenu.classList.toggle("active");
  });
}
dropdown();
function search() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.getElementById("search-input");
    const products = document.querySelectorAll("#product-list .product");

    if (searchIcon && searchInput) {
      // Show/hide input when clicking icon
      searchIcon.addEventListener("click", () => {
        if (searchInput.style.display === "block") {
          searchInput.style.display = "none"; // hide
          searchInput.value = ""; // clear input
          products.forEach((product) => (product.style.display = "block")); // reset list
        } else {
          searchInput.style.display = "block"; // show
          searchInput.focus();
        }
      });

      // Filter products while typing
      searchInput.addEventListener("keyup", () => {
        const query = searchInput.value.toLowerCase();
        products.forEach((product) => {
          const name = product.textContent.toLowerCase();
          product.style.display = name.includes(query) ? "block" : "none";
        });
      });
    }
  });
}
search();

function exp() {
  const startYear = 2011;
  const currentYear = new Date().getFullYear();
  const yearsPassed = currentYear - startYear;

  document.getElementById("yearCounter").textContent = yearsPassed;
}
exp();
function menu(params) {
  let toggleBtn = document.querySelector("#menuToggle");
  let menuPanel = document.querySelector(".menu");

  // Show menu on hover over toggle
  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menuPanel.classList.add("active");
    console.log("menuPanel");
  });

  // Hide menu when leaving the menu area
  menuPanel.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    menuPanel.classList.remove("active");
  });
  document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    const menu = document.querySelector(".menu");
    const checkbox = document.getElementById("checkbox");

    menuLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        // Smooth scroll
        target.scrollIntoView({ behavior: "smooth" });

        // Close menu after click
        checkbox.checked = false;
        menu.classList.remove("active");
      });
    });
  });
}
menu();

