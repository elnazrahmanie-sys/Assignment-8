document.addEventListener("DOMContentLoaded", function () {

  const storyItems = document.querySelectorAll(".about-section .list-group-item");

  storyItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateX(-30px)";

    setTimeout(() => {
      item.style.transition = "0.5s ease";
      item.style.opacity = 1;
      item.style.transform = "translateX(0)";
    }, index * 200);
  });

});