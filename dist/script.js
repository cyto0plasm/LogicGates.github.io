const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const searchbtn = document.querySelector("#search-btn");
const searchinput = document.querySelector("#search-input");
searchbtn.addEventListener("click", () => {
  searchinput.classList.toggle("hidden");
});
/* document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== mobileBtn) {
    mobileMenu.classList.add("hidden");
  }
}); */

document.addEventListener("DOMContentLoaded", function () {
  var dropdownButton = document.querySelector("#mobile-btn");
  var dropdownContent = document.querySelector("#mobile-menu");
  var dropdownLinks = document.querySelectorAll("#mobile-menu a");

  dropdownContent.style.transitionDelay = "0s";

  dropdownButton.addEventListener("click", function () {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.style.transitionDelay = "0s";
      dropdownContent.classList.remove("show");
      setTimeout(function () {
        dropdownLinks.forEach(function (link, index) {
          link.style.opacity = 0;
        });
        dropdownContent.style.display = "none";
      }, 1000);
    } else {
      dropdownContent.style.display = "block";
      setTimeout(function () {
        dropdownContent.classList.add("show");
        dropdownLinks.forEach(function (link, index) {
          link.style.transitionDelay = 0.3 + index * 0.2 + "s";
          link.style.opacity = 1;
        });
      }, 100);
    }
  });
});
