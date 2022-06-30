const requestURL = 'https://greenz081081.github.io/wdd-230-230/lesson%2009/data/data.json';
const spolights = document.querySelector('.spotlights');
const firstSpotlight = document.querySelector('.spotlight-1');
const secondSpotlight = document.querySelector('.spotlight-2');
const thirdSpotlight = document.querySelector('.spotlight-3');

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
  let onlyGold = data.companies.filter(c => c.membershiplevel === "Gold", "Silver");
  onlyGold.forEach(company=> { 
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    // let p4 = document.createElement("p");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h6 = document.createElement("h6");

    let fullName = `${company.name}`;
    let companyAddress = `${company.address}`;
    let phoneNumber = `${company.phone}`;
    let membershipLevel = `${company.membershiplevel}`;
    let websiteUrl = `${company.websiteurl}`;
    // let goldMembershipLevel = `${company.membershiplevel.Gold}`;
    // let silverMembershipLevel = `${company.membershiplevel.Silver}`;

    h2.innerHTML = fullName;
    p2.innerHTML = `Address: ${companyAddress}`;
    p3.innerHTML = `Website: ${websiteUrl}`;
    h6.innerHTML = `Phone: ${phoneNumber}`;
    p.innerHTML = `Membership: ${membershipLevel}`
    img.setAttribute("src", company.image);
    img.setAttribute("alt", `Image of ${fullName}`);
    img.setAttribute("loading", "lazy");
    // p.innerHTML = `Membership: ${goldMembershipLevel}`
    // p4.innerHTML = `Membership: ${silverMembershipLevel}`

    card.append(h2);
    card.append(h6);
    card.appendChild(p);
    // card.appendChild(p2);
    // card.appendChild(p3);
    card.append(img);
    // spolights_1.appendChild(p4);

    // spolights.append(card);

    firstSpotlight.append(card);
    secondSpotlight.append(card);
    thirdSpotlight.append(card);

    spolights.append(firstSpotlight);
    spolights.append(secondSpotlight);
    spolights.append(thirdSpotlight);

  });
}

getCompanies();