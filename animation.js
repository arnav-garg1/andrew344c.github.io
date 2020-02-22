var overlay = document.getElementById("overlay");
var closeMenu = document.getElementById("close-menu");

function show() {
    overlay.classList.add("show");
}

function close() {
    overlay.classList.remove("show");
}

document.getElementById("open-menu").addEventListener("click", show);
document.getElementById("close-menu").addEventListener("click", close);