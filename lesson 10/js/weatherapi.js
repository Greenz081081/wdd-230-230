// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const sectiondesc = document.querySelector('section');


const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&
appid=cb411365f163ce2a1a5d327896469c7f`;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const temp = weatherData.main.temp;

    let section = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc[0].toUpperCase() + desc.slice(1);
    p.innerHTML = `<strong>Wind:</strong> ${speed.toFixed(1)}mph W`;
    p2.innerHTML = `<strong>Humidity:</strong> ${humidity}%`;
    p3.innerHTML = `<strong>Temp:</strong> ${temp}&deg;F`;

    section.appendChild(p);
    section.appendChild(p2);
    section.appendChild(p3);

    captionDesc.append(section);
}