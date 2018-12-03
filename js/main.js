// EYE JS
"use strict";

// $(document).ready(function() {

//     // image info
//     // width: 1850px / 5 = 370 columns
//     // height: 1000px / 5 = 200 rows
//     // 74000 to divs


// });





// $(document).ready(function() {
//     for (var i = 1; i <= 1; i++) {
//         // $('#target').append('<div class="dot-rows" id="dot-row-' + i + '">');
//         for (var j = 1; j <= 18500; j++) {
//             $('#target').append('<div class="all-dots" id="dot-' + j + '"></div>')

//             // if (j % 370 === 0) {
//             //     $('#target').append('<br />')
//             // }
//         }
//         // $('#target').append('</ div>' );
//     }
// });
// $(document).ready(function() {

var counter = 70;
// Open SIDE OPTIONS MENU when letter 'O' is pressed on keyboard
var direction = "north";


function toggleOptions() {
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

        $(".fa").attr("class", "fa fa-arrow-up");
        if (counter <= -7) {
            $(".eagle-eye").css("background-position", "48%" + -7 + "%");

        } else {
            counter = counter - 7;
            $(".eagle-eye").css("background-position", "48%" + counter + "%");
        }

        $(".direction").attr("class", "direction north");

        // EAST
    } else if (event === 39) {
        $(".fa").attr("class", "fa fa-arrow-right");
        var direction = "east";


        $(".direction").attr("class", "direction east");



        // SOUTH
    } else if (event === 40) {
        $(".fa").attr("class", "fa fa-arrow-down");


        if (direction === "south") {
            counter = counter + 7;

            $(".eagle-eye").css("background-position", "48%" + counter + "%");
        } else { var direction = "south"; }
        var direction = "south";

        $(".direction").attr("class", "direction south");



        // WEST
    } else if (event === 37) {
        $(".fa").attr("class", "fa fa-arrow-left");
        var direction = "west";
        $(".direction").attr("class", "direction west");
    }


    // console.log(direction);





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
