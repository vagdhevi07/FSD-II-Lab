"use strict";
let city = "Hyderabad";
let temperature = 32;
let isRaining = false;
console.log("City:", city);
console.log("Temperature:", temperature);
console.log("Is it raining?", isRaining);
function displayWeather(city, temp, raining) {
    console.log("City:", city);
    console.log("Temperature:", temp + "°C");
    console.log("Raining:", raining);
}
displayWeather(city, temperature, isRaining);
