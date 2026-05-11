// =========================================
// SIMPLE NAV ACTIVE STATE
// =========================================


(function () {
  const path = window.location.pathname.toLowerCase();

  const map = {
    "/": "home",
    "/index.html": "home",
    "/personal.html": "personal",
    "/experience.html": "experience",
    "/education.html": "education",
    "/skills.html": "skills",
    "/languages.html": "languages",
    "/hobbies.html": "hobbies"
  };

  const current = map[path] || "home";
  const links = document.querySelectorAll("[data-nav]");

  links.forEach((link) => {
    if (link.dataset.nav === current) {
      link.classList.add("active");
    }
  });
})();
