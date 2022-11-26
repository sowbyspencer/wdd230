/**
 * It fetches the data from the API, and if the response is ok, it displays the results. If the
 * response is not ok, it throws an error.
 */
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

/**
 * The function takes the weather data from the API and displays it on the page.
 * @param weatherData - the JSON object returned from the API call
 */
function displayResults(weatherData){
  temp = weatherData.main.temp;
  let windSpeed = weatherData.wind.speed;

  currentTemp.innerHTML = `${temp.toFixed(0)}`

  weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
  description = weatherData.weather[0].description;
  weatherIcon.setAttribute('alt', `${description}.png`);

  captionDesc.textContent = description;
  cloudCondit.textContent = `${weatherData.clouds.all}% cloudy`;

  windSpeedEl.textContent = windSpeed;

  /** Calculating the wind chill. 
  * Checking if the temperature is less than or equal to 50 and the wind speed is greater than 3.
  */
  if (temp <= 50 && windSpeed > 3){
      let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
      windChillEl.textContent = `${Math.round(windChill * 10) / 10}°F`;
  }
  else {
      windChillEl.textContent = "N/A";
  }
}


// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');
const cloudCondit = document.querySelector('#clouds');
const windSpeedEl = document.querySelector('#wind-speed')
const windChillEl = document.querySelector("#wind-chill")

const url = "https://api.openweathermap.org/data/2.5/weather?q=fairbanks&appid=446cea1b9c64b9a252192c7d6c630e45&units=imperial"


apiFetch();