function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio1" + count).checked = true;
}

let show = true;
const menuContent = document.querySelector(".content");
const menuToggle = menuContent.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuContent.classList.toggle("on", show);
  show = !show;
});
