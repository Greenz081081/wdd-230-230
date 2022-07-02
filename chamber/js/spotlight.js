const requestURL = 'https://greenz081081.github.io/wdd-230-230/lesson%2009/data/data.json';
const firstSpotlight = document.querySelector('.spotlight-1');
const secondSpotlight = document.querySelector('.spotlight-2');
const thirdSpotlight = document.querySelector('.spotlight-3');

async function getCompanies () {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    // console.log(data);
    buildKodeHauzCompanyCard(data);
    buildDelonCompanyCard(data);
    buildDigificsCompanyCard(data)
  } else {
    throw Error(response.statusText);
  }
}

function buildKodeHauzCompanyCard(data) {
  let onlyGold = data.companies.filter(c => c.name === "KodeHauz");
  onlyGold.forEach(company=> { 
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");

    let fullName = `${company.name}`;
    let companyAddress = `${company.address}`;
    let phoneNumber = `${company.phone}`;
    let membershipLevel = `${company.membershiplevel}`;
    let websiteUrl = `${company.websiteurl}`;

    h2.innerHTML = fullName;
    p2.innerHTML = `Address: ${companyAddress}`;
    p3.innerHTML = `Website: ${websiteUrl}`;
    h6.innerHTML = `Phone: ${phoneNumber}`;
    p.innerHTML = `Membership: ${membershipLevel}`
    img.setAttribute("src", company.image);
    img.setAttribute("alt", `Image of ${fullName}`);
    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(h6);
    card.appendChild(p);
    card.append(img);


    firstSpotlight.append(card);
  });
}

function buildDelonCompanyCard(data) {
  let onlyGold = data.companies.filter(c => c.name === "Delon Company");
  onlyGold.forEach(company=> { 
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");

    let fullName = `${company.name}`;
    let companyAddress = `${company.address}`;
    let phoneNumber = `${company.phone}`;
    let membershipLevel = `${company.membershiplevel}`;
    let websiteUrl = `${company.websiteurl}`;

    h2.innerHTML = fullName;
    p2.innerHTML = `Address: ${companyAddress}`;
    p3.innerHTML = `Website: ${websiteUrl}`;
    h6.innerHTML = `Phone: ${phoneNumber}`;
    p.innerHTML = `Membership: ${membershipLevel}`
    img.setAttribute("src", company.image);
    img.setAttribute("alt", `Image of ${fullName}`);
    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(h6);
    card.appendChild(p);
    card.append(img);


    secondSpotlight.append(card);
  });
}


function buildDigificsCompanyCard(data) {
  let onlyGold = data.companies.filter(c => c.name === "Digifics Limited");
  onlyGold.forEach(company=> { 
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");

    let fullName = `${company.name}`;
    let companyAddress = `${company.address}`;
    let phoneNumber = `${company.phone}`;
    let membershipLevel = `${company.membershiplevel}`;
    let websiteUrl = `${company.websiteurl}`;

    h2.innerHTML = fullName;
    p2.innerHTML = `Address: ${companyAddress}`;
    p3.innerHTML = `Website: ${websiteUrl}`;
    h6.innerHTML = `Phone: ${phoneNumber}`;
    p.innerHTML = `Membership: ${membershipLevel}`
    img.setAttribute("src", company.image);
    img.setAttribute("alt", `Image of ${fullName}`);
    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(h6);
    card.appendChild(p);
    card.append(img);


    thirdSpotlight.append(card);
  });
}

getCompanies();