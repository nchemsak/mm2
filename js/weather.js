const loc = document.getElementById("location");
const temNum = document.getElementById("temperature-num");
const temScale = document.getElementById("temperature-scale");
const weatherCon = document.getElementById("weather-condition");
// console.log(temScale);
// get location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            getWeather(position.coords.latitude, position.coords.longitude);
        });
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}


// get weather data according to the location
function getWeather(lat, long) {
    const root = "https://fcc-weather-api.glitch.me/api/current?";
    fetch(`${root}lat=${lat}&lon=${long}`, { method: "get" })
        .then(resp => resp.json())
        .then(data => {
            updateDataToUI(data.name, data.weather, data.main.temp);
        })
        .catch(function(err) {
            console.error(err);
        });
}

// update the data from API to DOM
function updateDataToUI(location, weather, temp) {
    var weatherCondition = displayWeatherOverlay(weather[0].main)


    console.log(weather);

    weatherCon.innerHTML = weather[0].main;
    loc.innerHTML = location;
    temNum.innerHTML = `${temp}`;

    if (temScale.innerHTML === "C") {
        temNum.innerHTML = cToF(temNum.innerHTML).toFixed(2);
        temScale.innerHTML = "F";
    } else if (temScale.innerHTML === 'F') {
        temNum.innerHTML = fToC(temNum.innerHTML).toFixed(2);
        temScale.innerHTML = "C";
    }

}


function displayWeatherOverlay(x) {

    if (x == "Clouds") {
        console.log("clouds");
    } else if (x == "Rain") {
        console.log("rain");
    } else if (x == "Snow") {
        console.log("snow");
    } else if (x == "Clear") {
        console.log("clear");
    }
}
// helper function change from C to F
function cToF(celsius) {
    return celsius * 9 / 5 + 32;
}


window.onload = function() {
    getLocation();
};