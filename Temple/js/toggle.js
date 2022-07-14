function toggleMenu () {
    document.querySelector("#primaryNav").classList.toggle("open");
}

const x = document.querySelector("#hamburgerButton");
x.onclick = toggleMenu;


const lastModified = (document.lastModified);
document.querySelector("#currentdate").textContent = lastModified;