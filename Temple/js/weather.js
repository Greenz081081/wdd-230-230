// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');
const currentTemperature = document.querySelector('#current-temperature');
const captionDescription = document.querySelector('figure');



// const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cb411365f163ce2a1a5d327896469c7f`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=cb411365f163ce2a1a5d327896469c7f`;


async function apiFetch() {
    try {
      const response = await fetch(url);
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

function displayResults(weatherData) {
    // currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    const temp = weatherData.list[0].main.temp;
    const humidity = weatherData.list[0].main.humidity;

    let section = document.createElement("section");
    let image = document.createElement("img");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    image.setAttribute('src', iconsrc);
    image.setAttribute('alt', desc);
    p.innerHTML = `<strong>Condition Description:</strong> ${desc}`;
    p2.innerHTML = `The current<strong> Temperature</strong> is: ${temp.toFixed(1)}&deg;F`;
    p3.innerHTML =`<strong>Humidity:</strong> ${humidity}%`;

    section.append(image);
    section.appendChild(p);
    section.appendChild(p2);
    section.appendChild(p3);

    captionDesc.append(section);
}

const daysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

const day = new Date();
const dayname = daysName[day.getDay()];


function displayThreeDayResults(weatherData) {
  // currentTemperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const moningTime = weatherData.list[6].dt_txt;
  const afternoonTime = weatherData.list[14].dt_txt;
  const nightTime = weatherData.list[22].dt_txt;
  const morningTemp = weatherData.list[6].main.temp;
  const afternoonTemp = weatherData.list[14].main.temp;
  const nightTemp = weatherData.list[22].main.temp;

  let section = document.createElement("section");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let h3_1 = document.createElement("h3");
  let h3_2 = document.createElement("h3");
  let h3_3 = document.createElement("h3");

  p.innerHTML = `<strong>Temp:</strong> ${morningTemp}&deg;F`;
  p2.innerHTML = `<strong>Temp:</strong> ${afternoonTemp}&deg;F`;
  p3.innerHTML = `<strong>Temp:</strong> ${nightTemp}&deg;F`;
  h3_1.innerHTML = `<strong>Date Time:</strong> ${moningTime}`;
  h3_2.innerHTML = `<strong>Date Time:</strong> ${afternoonTime}`;
  h3_3.innerHTML = `<strong>Date Time:</strong> ${nightTime}`;
  
  section.append(h3_1);
  section.appendChild(p);
  section.append(h3_2)
  section.appendChild(p2);
  section.append(h3_3)
  section.appendChild(p3);

  captionDescription.append(section);
}
