function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;

const lastModified = (document.lastModified);
document.querySelector("#currentdate").textContent = lastModified;