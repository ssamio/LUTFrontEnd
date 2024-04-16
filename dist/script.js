document.addEventListener("DOMContentLoaded", function () {
  const cursorHeading = document.getElementById("cursorHeading");
  const menu = document.getElementById("cursorMenu");
  const main = document.getElementById("background");

  document.addEventListener("mousemove", function (event) {
    cursorHeading.style.left = event.clientX + "px";
    cursorHeading.style.top = event.clientY + "px";
  });

  main.addEventListener("click", function () {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      cursorHeading.style.display = "none";
    } else {
      menu.style.display = "none";
      cursorHeading.style.display = "block";
    }
  });
});
