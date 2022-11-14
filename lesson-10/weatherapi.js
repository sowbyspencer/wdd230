// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=fairbanks&appid=446cea1b9c64b9a252192c7d6c630e45&units=imperial"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    description = weatherData.weather[0].description;
    weatherIcon.setAttribute('alt', `${description}.png`);
    captionDesc.textContent = description;
  }
  
  apiFetch();