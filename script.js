/*When user presses the toggleButton the element with class .menu gets the class toggle which makes it slide in form the left with transition*/

var toggleButton = document.querySelector(".toggleButton");
var menu = document.querySelector(".menu");

toggleButton.addEventListener("click", toggle);

function toggle () {
  menu.classList.toggle("toggle");
}

