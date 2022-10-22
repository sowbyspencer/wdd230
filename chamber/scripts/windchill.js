let temp = document.querySelector("#temp").textContent
let windSpeed = document.querySelector("#wind-speed").textContent
const windChillEl = document.querySelector("#wind-chill")

if (temp <= 50 && windSpeed > 3){
    let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16
    windChillEl.textContent = `${Math.round(windChill * 10) / 10}°F`
}
else {
    windChillEl.textContent = "N/A"
}