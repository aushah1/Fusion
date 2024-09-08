let hamburger = document.querySelector(".hamburger-cont");
let links = document.querySelector(".toggle");

function toggle() {
  if (links.classList.contains("hidden")) {
    links.classList.remove("hidden");
  } else {
    links.classList.add("hidden");
  }
}

hamburger.addEventListener("click", toggle);
