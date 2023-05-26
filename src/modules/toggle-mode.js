export function initToggle() {
  const modeToggle = document.querySelector(".toggle");
  const headerTagline = document.querySelector(".tagline");
  const bodyElement = document.querySelector("body");
  const mainElement = document.querySelector("main");
  modeToggle.addEventListener("click", () => {
    mainElement.classList.toggle("dark-mode");
    bodyElement.classList.toggle("dark-mode");
    headerTagline.classList.toggle("dark-mode");
  });
}
