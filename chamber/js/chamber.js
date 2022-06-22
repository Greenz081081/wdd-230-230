function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;

const lastModified = (document.lastModified);
document.querySelector("#currentdate").textContent = lastModified;

const daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const day = new Date();
const dayname = daysName[day.getDay()];

function displayMessage () {

    if (dayname === "Wednesday") {
        document.getElementById("invitation").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    } else if (dayname === "Tuesday") {
        document.getElementById("invitation").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    };
};

displayMessage();