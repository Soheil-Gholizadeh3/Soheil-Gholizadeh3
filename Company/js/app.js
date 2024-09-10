// Soheil pj
var my_nav = document.getElementById("nav");
var butt = document.getElementById("list-icon");

function nav() {
  my_nav.classList.remove("nav-hidden");
  my_nav.classList.add("nav-show");
  butt.innerHTML =
    "<li class='bi bi-x' id='list-icon' onclick='nav_close()'></li>";
}

function nav_close() {
  my_nav.classList.add("nav-hidden");
  my_nav.classList.remove("nav-show");
  butt.innerHTML =
  "<li class='bi bi-list-nested' id='list-icon' onclick='nav()'></li>";
}
