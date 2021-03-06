const requestURL = 'https://greenz081081.github.io/wdd-230-230/Temple/data.json';
const templeCards = document.querySelector('.cards');

async function getTemples () {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    buildTempleCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildTempleCards(data) {
  data.Temples.forEach(temple => {
    let card = document.createElement("section");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    let p7 = document.createElement("p");
    let p8 = document.createElement("h2");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");


    let templefullName = `${temple.Name}`;
    let templeAddress = `${temple.Location}`;
    let templePhone = `${temple.Phone}`;
    let templeEmail = `${temple.Mail}`;
    let templeServices = `${temple.Services}`;
    let templeHistory = `${temple.History}`;
    let templeOrdinance = `${temple.Ordinance}`;
    let templeSession = `${temple.Session}`;
    let templeClosure = `${temple.Closure}`


    img.setAttribute("src", temple.Image);
    img.setAttribute("alt", `Image of ${templefullName}`);
    img.setAttribute("loading", "lazy");
    h2.innerHTML = templefullName;
    h6.innerHTML = `<strong>Mail:</strong> ${templeEmail}`;
    p.innerHTML = `<strong>Address:</strong> ${templeAddress}`;
    p2.innerHTML = `<strong>Phone:</strong> ${templePhone}`;
    p3.innerHTML = `<strong>Services:</strong> ${templeServices}`
    p4.innerHTML = `<strong>History:</strong> ${templeHistory}`
    p5.innerHTML = `<strong>Ordinance Schedule:</strong> ${templeOrdinance}`
    p6.innerHTML = `<strong>Session Schedule:</strong> ${templeSession}`
    p7.innerHTML = `<strong>Closure Schedule:</strong> ${templeClosure}`
    h4.innerHTML  = `<button>Like</button>`;

    let btn = h4;

    let multiplyNumLikes = 0;
    localStorage.getItem("clickCount");

    btn.addEventListener("click", function() {
      multiplyNumLikes++;
      if (multiplyNumLikes == 1) {
        p8.textContent = `${multiplyNumLikes} Like`;
      } else {
        p8.textContent = `${multiplyNumLikes} Likes`;
      }

    });

    localStorage.setItem("clickCount", multiplyNumLikes);

    card.append(img);
    card.append(h2);
    card.append(h6);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.append(h4);
    card.append(p8);
   

    templeCards.append(card);
  });

}

getTemples();