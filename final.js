const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
  this.style.position = "absolute";
  this.style.top = Math.random() * 80 + "%";
  this.style.left = Math.random() * 80 + "%";
});