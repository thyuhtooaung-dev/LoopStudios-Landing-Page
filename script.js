const elements = {
  hamIcon: document.getElementById("hamIcon"),
  menuCloseBtn: document.getElementById("menuCloseBtn"),
  mobileMenuLinks: document.querySelectorAll(".mobile-menu__link"),
  mobileMenu: document.getElementById("mobileMenu"),
  body: document.body,
};

function toggleMobileMenu() {
  elements.mobileMenu.classList.toggle("open");
  elements.body.classList.toggle("no-scroll");

  const isMenuOpen = elements.mobileMenu.classList.contains("open");
  elements.hamIcon.setAttribute("aria-expanded", isMenuOpen);
}

if (elements.hamIcon) {
  elements.hamIcon.addEventListener("click", toggleMobileMenu);
}

if (elements.menuCloseBtn) {
  elements.menuCloseBtn.addEventListener("click", toggleMobileMenu);
}

elements.mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (elements.mobileMenu.classList.contains("open")) {
      toggleMobileMenu();
    }
  }
});
