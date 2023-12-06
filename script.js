function toggleHamburger(x) {
  x.classList.toggle("change");

  let filter = document.getElementById("body-filter");
  filter.classList.toggle("filter");

  let myMenu = document.getElementById("menu");
  if (myMenu.className === "menu") {
    myMenu.className += " menu-active";
    myMenu.style.right = "-16px";
  } else {
    myMenu.className = "menu";
    myMenu.style.right = "100vw";
  }
}
