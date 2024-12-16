//Code for the toggle overlay of view-all button

const overlay = document.getElementById("overlay");
const toggleOverlayButton = document.getElementById("toggle-overlay");
const closeOverlayButton = document.getElementById("close-overlay");

toggleOverlayButton.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  overlay.classList.add("visible");
});

closeOverlayButton.addEventListener("click", () => {
  overlay.classList.remove("visible");
  overlay.classList.add("hidden");
});
