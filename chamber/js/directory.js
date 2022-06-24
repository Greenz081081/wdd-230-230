const requestURL = 'https://greenz081081.github.io/wdd-230-230/lesson%2009/data/data.json';
const discoveryCards = document.querySelector('.cards');

async function getCompanies () {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    // console.log(data);
    buildCompanyCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildCompanyCards(data) {
  data.companies.forEach(company => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");

    let fullName = `${company.name}`;
    let companyAddress = `${company.address}`;
    let phoneNumber = `${company.phone}`;
    let membershipLevel = `${company.membershiplevel}`;
    let websiteUrl = `${company.websiteurl}`;
    let numberOrder = `${company.order}`;

    h2.innerHTML = fullName;
    p.innerHTML = `Address: ${companyAddress}`;
    p.innerHTML = `Website: ${websiteUrl}`;
    h6.innerHTML = `Phone: ${phoneNumber}`;
    p.innerHTML = `Membership: ${membershipLevel}`
    img.setAttribute("src", company.image);
    img.setAttribute("alt", `Image of ${fullName} - the ${numberOrder}th company`);
    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(h6)
    card.appendChild(p);
    card.append(img)

    discoveryCards.append(card);
  });
}

getCompanies();