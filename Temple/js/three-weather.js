const currentTemperature = document.querySelector('#current-temperature');
const captionDescription = document.querySelector('figure');


const requestUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=Eket,NG&units=Imperial&cnt=3&
appid=cb411365f163ce2a1a5d327896469c7f`;


async function apiFetch() {
    try {
      const response = await fetch(requestUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        displayThreeDayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

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

function displayThreeDayResults(weatherData) {
  currentTemperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;


  const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const des = weatherData.weather[0].description;
  const speed = weatherData.wind.speed;
  const temp = weatherData.main.temp;
  const humidity = weatherData.main.humidity;

  let section = document.createElement("section");
  let image = document.createElement("img");
  let h6 = document.createElement("h6");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  let result = 35.74 + 0.6215 * temp - 33.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16);
  let description = des[0].toUpperCase() + des.slice(1);


  if (temp >= 50 && speed >= 3.0) {
  p2.innerHTML = `<strong>Wind Chill:</strong> ${result.toFixed(2)}&deg;F`;

  } else if (temp > 50 && speed < 3.0) {
  p2.innerHTML = `<strong>Wind Chill:</strong> ${"N/A"}`;
  }

  image.setAttribute('src', icon);
  image.setAttribute('alt', des);
  h6.innerHTML = description;
  p.innerHTML = `<strong>Wind Speed:</strong> ${speed.toFixed(1)}km/h`;
  p3.innerHTML =`<strong>Humidity:</strong> ${humidity}`;

  section.append(image);
  section.append(h6);
  section.appendChild(p);
  section.appendChild(p2);
  section.appendChild(p3);

  captionDescription.append(section);
}
