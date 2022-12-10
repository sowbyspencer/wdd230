/**
 * It fetches the data from the API, and if the response is ok, it displays the results. If the
 * response is not ok, it throws an error.
 */
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
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
  let temp = weatherData.list[0].main.temp;
  currentTemp.innerHTML = `${temp.toFixed(0)}°F`;

  let humidity = weatherData.list[0].main.humidity;
  humidityEl.innerHTML = `${humidity}% Humidity`;

  description = weatherData.list[0].weather[0].main;
  captionDesc.textContent = description;

  weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`);
  weatherIcon.setAttribute('alt', `${description}.png`);

  let day1High = weatherData.list[0].main.temp_max
  let day1Low = weatherData.list[0].main.temp_min

  let day2High = weatherData.list[8].main.temp_max
  let day2Low = weatherData.list[8].main.temp_min

  let day3High = weatherData.list[16].main.temp_max
  let day3Low = weatherData.list[16].main.temp_min

  for (i=0; i < weatherData.list.length; i++){

    if (i < 8){
      if (weatherData.list[i].main.temp_max > day1High){
        day1High = weatherData.list[i].main.temp_max
      }
      if (weatherData.list[i].main.temp_min < day1Low){
        day1Low = weatherData.list[i].main.temp_min
      }
    }
    else if (i < 16){
      if (weatherData.list[i].main.temp_max > day2High){
        day2High = weatherData.list[i].main.temp_max
      }
      if (weatherData.list[i].main.temp_min < day2Low){
        day2Low = weatherData.list[i].main.temp_min
      }
    }
    else {
      if (weatherData.list[i].main.temp_max > day2High){
        day3High = weatherData.list[i].main.temp_max
      }
      if (weatherData.list[i].main.temp_min < day3Low){
        day3Low = weatherData.list[i].main.temp_min
      }
    }
  }

  let day1HighTd = document.querySelector("#day1High")
  let day1LowTd = document.querySelector("#day1Low")

  let day2HighTd = document.querySelector("#day2High")
  let day2LowTd = document.querySelector("#day2Low")

  let day3HighTd = document.querySelector("#day3High")
  let day3LowTd = document.querySelector("#day3Low")

  
  day1HighTd.textContent = `${day1High.toFixed(0)}°F`
  day1LowTd.textContent = `${day1Low.toFixed(0)}°F`

  day2HighTd.textContent = `${day2High.toFixed(0)}°F`
  day2LowTd.textContent = `${day2Low.toFixed(0)}°F`

  day3HighTd.textContent = `${day3High.toFixed(0)}°F`
  day3LowTd.textContent = `${day3Low.toFixed(0)}°F`

}



// select HTML elements in the document
const currentTemp = document.querySelector('#w_temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#w_condition');
const humidityEl = document.querySelector('#w_humidity')



const url = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&cnt=24&appid=446cea1b9c64b9a252192c7d6c630e45&units=imperial"

apiFetch();