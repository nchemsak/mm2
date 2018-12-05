// EYE JS
"use strict";

var counterNorth = 70;
var counterEast = 48;
// Open SIDE OPTIONS MENU when letter 'O' is pressed on keyboard
var direction = "north";


function toggleOptions() {
    // Open SIDE OPTIONS MENU when letter 'O' is pressed on keyboard

    $('.toggle').toggleClass('options-menu-off options-menu-on');

}


$(document).keydown(function(e) {
    var event = e.which;
    if (event === 79) {
        $('.toggle').toggleClass('options-menu-off options-menu-on');
    }

    // Change direction and arrow direction with arrow presses



    // NORTH
    else if (event === 38) {

        // $(".fa").attr("class", "fa fa-arrow-up"); 
        if (counterNorth <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + "%");
        } else {
            counterNorth = counterNorth - 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
        }

        $(".direction").attr("class", "direction north");








        // EAST
    } else if (event === 39) {
        // $(".fa").attr("class", "fa fa-arrow-right");
        var direction = "east";
        if (counterEast <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");
            $(".bee1").addClass("bee-flip");
            $(".bee2").addClass("bee-flip");
        } else {
            counterEast = counterEast + 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
            $(".bee1").addClass("bee-flip");
            $(".bee2").addClass("bee-flip");
        }
        $(".direction").attr("class", "direction east");




        // SOUTH
    } else if (event === 40) {
        // $(".fa").attr("class", "fa fa-arrow-down");
        if (direction === "south") {
            counterNorth = counterNorth + 7;
            $(".eagle-eye").css("background-position", "48%" + counterNorth + "%");
        } else { var direction = "south"; }
        var direction = "south";
        $(".direction").attr("class", "direction south");
        if (counterNorth <= +7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + "%");
        } else {
            counterNorth = counterNorth + 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
        }




        // WEST
    } else if (event === 37) {
        // $(".fa").attr("class", "fa fa-arrow-left");
        var direction = "west";
        if (counterEast <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");
        } else {
            counterEast = counterEast - 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
            $(".bee1").removeClass("bee-flip");
            $(".bee2").removeClass("bee-flip");
        }

        $(".direction").attr("class", "direction west");
    }


    // GO TO LINK WHEN AT SPECIFIC LOCATION
    // console.log("counterEast:", counterEast);
    // console.log("counterNorth:", counterNorth);
    if (counterEast === 48 && counterNorth === 77) {
        console.log("Welcome to the Restaurant!"); 
        window.location.href = "recipe-book.html";
    } 



        var mainBeeCounter = 5;
    if (event === 39) {
          var mainBeeCounter = mainBeeCounter + 20;
        $(".main-bee").css("left", mainBeeCounter + 20 + "px");
            // $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");

        

    }



});







// window.onload = function() {
//     getLocation();
// };


// const loc = document.getElementById("location");
// const temNum = document.getElementById("temperature-num");
// const temScale = document.getElementById("temperature-scale");
// const weatherCon = document.getElementById("weather-condition");
// const weatherIcon = document.getElementById("weather-icon");
// // get location
// function getLocation() {

//     if (navigator.geolocation) {

//         navigator.geolocation.getCurrentPosition(position => {
//             var nick = getWeather(position.coords.latitude, position.coords.longitude);

//         });
//     } else {
//         loc.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// // get weather data according to the location
// function getWeather(lat, long) {
//     const root = "https://fcc-weather-api.glitch.me/api/current?";

//     fetch(`${root}lat=${lat}&lon=${long}`, { method: "get" })
//         .then(resp => resp.json())
//         .then(data => {
//             updateDataToUI(data.name, data.weather, data.main.temp);
//         })
//         .catch(function(err) {
//             console.error(err);
//         });
// }

// // update the data from API to DOM
// function updateDataToUI(location, weather, temp) {
//     weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
//     weatherCon.innerHTML = weather[0].main;
//     loc.innerHTML = location;
//     temNum.innerHTML = `${temp}`;

// }


// if (navigator.geolocation) {
//  navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position);
//  });
// }


// function getLocation() {
//     // if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//         var long = position.coords.longitude;
//         var lad = position.coords.latitude;

//         console.log(long, lad);

//     // } else {
//     //     x.innerHTML = "Geolocation is not supported by this browser.";
//     // }
// }

// window.onload = function() {
//     getLocation();
// };