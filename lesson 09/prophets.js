const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets () {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    // console.log(data);
    buildProphetCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildProphetCards(data) {
  data.prophets.forEach(prophet => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");

    let fullName = `${prophet.name} ${prophet.lastname}`;
    let birthDate = `Date of Birth: ${prophet.birthdate}`;
    let numberOrder = `${prophet.order}`;

    h2.innerHTML = fullName;
    p.innerHTML = `Location of Birth: ${prophet.birthplace}`;
    h6.innerHTML = birthDate;
    img.setAttribute("src", prophet.imageurl);
    img.setAttribute("alt", `Potrait of ${fullName} - ${numberOrder}th Latter-Day President`);
    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(h6)
    card.appendChild(p);
    card.append(img)

    cards.append(card);
  });
}

getProphets();