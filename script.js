const toggleButton = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(dark) {
  document.body.classList.toggle("dark-mode", dark);
  toggleButton.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
}

// Inicialização
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme === "dark");
} else {
  setTheme(prefersDark);
}

toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  setTheme(isDark);
});

