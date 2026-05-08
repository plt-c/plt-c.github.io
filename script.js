// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// SMOOTH PAGE TRANSITIONS
document.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href").endsWith(".html")) {
        link.addEventListener("click", e => {
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location = link.href;
            }, 200);
            e.preventDefault();
        });
    }
});

// FADE-IN ON LOAD
window.onload = () => {
    document.body.style.opacity = "1";
};
