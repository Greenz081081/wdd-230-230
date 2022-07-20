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
  const temp = weatherData.main.temp;


  let section = document.createElement("section");
  let p3 = document.createElement("p");


  p3.innerHTML =`<strong>Temp:</strong> ${temp}`;

  section.appendChild(p3);

  captionDescription.append(section);
}
