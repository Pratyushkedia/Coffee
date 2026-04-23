const noBtn = document.getElementById("noBtn");

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

// Detect if device supports touch (mobile)
const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (isMobile) {
  // Only mobile → auto move
  setInterval(moveButton, 300);
} else {
  // Only desktop → hover move
  noBtn.addEventListener("mouseover", moveButton);
}