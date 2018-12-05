// EYE JS
"use strict";

var counterNorth = 70;
var counterEast = 48;
var counterEastMain = 55;

// Open SIDE OPTIONS MENU when letter 'O' is pressed on keyboard
var direction = "north";


// Function to call to open SIDE OPTIONS MENU and toggle bee when link is clicked

function toggleOptions() {
    $('.toggle').toggleClass('options-menu-off options-menu-on');
    $('.bee1').toggleClass('hide-bee show-bee');
    $('.bee2').toggleClass('hide-bee show-bee');
    $('#options-menu').toggleClass('d-none d-block');
}


$(document).keydown(function(e) {
    var event = e.which;

    //////////////////////////// Letter 'O' opens options and hides bee //////////////////////
    if (event === 79) {
        $('.toggle').toggleClass('options-menu-off options-menu-on');
        $('.bee1').toggleClass('hide-bee show-bee');
        $('.bee2').toggleClass('hide-bee show-bee');
        $('#options-menu').toggleClass('d-none d-block');
    }

    // Change direction and arrow direction with arrow presses


    //////////////////////////// NORTH ///////////////////////////////////
    else if (event === 38) {
        if (counterNorth <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + "%");
        } else {
            counterNorth = counterNorth - 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
        }

        $(".direction").attr("class", "direction north");



        //////////////////////////// EAST ///////////////////////////////////
    } else if (event === 39) {
        var direction = "east";
        if (counterEast <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");
            $(".bee1").addClass("bee-flip");
            $(".bee2").addClass("bee-flip");



        } else {
            counterEast = counterEast + 7;
            counterEastMain = counterEastMain + 55;

            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
            $(".bee1").addClass("bee-flip");
            $(".bee2").addClass("bee-flip");
            $(".main-bee1").addClass("bee-flip");
            $(".main-bee2").addClass("bee-flip");
            if (counterEastMain <= 550) {
                $(".main-bee1").css("left", (counterEastMain) + "px");
                $(".main-bee2").css("left", (counterEastMain) + "px");
            }
            // console.log("counterEastMain", counterEastMain);
            if (counterEastMain === 550) {
                $(".header-image").append('<div id="recipe-popup" class="popover fade show bs-popover-top" role="tooltip" x-placement="top"><div class="arrow" style="right: 26px;"></div><div class="popover-body">Hi, Welcome to my shop!  Please view available recipes you want to learn by clicking on a recipe on the right.</div></div>');
                $("#recipe-popup").animate({ opacity: '0.8' });
            }
            // prevent bee counter from going past a set amount in recipes
            if (counterEastMain > 550) {
                counterEastMain = 550;
            }

        }
        $(".direction").attr("class", "direction east");




        //////////////////////////// SOUTH ///////////////////////////////////
    } else if (event === 40) {

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



        //////////////////////////// WEST ///////////////////////////////////
    } else if (event === 37) {
        var direction = "west";
        if (counterEast <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");
        } else {
            counterEast = counterEast - 7;
            counterEastMain = counterEastMain - 55;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
            $(".bee1").removeClass("bee-flip");
            $(".bee2").removeClass("bee-flip");


            if (counterEastMain >= 0) {
                $(".main-bee1").css("left", (counterEastMain) + "px");
                $(".main-bee2").css("left", (counterEastMain) + "px");

                $(".main-bee1").removeClass("bee-flip");
                $(".main-bee2").removeClass("bee-flip");

            }

            if (counterEastMain < 550) {
                $("#recipe-popup").animate({ opacity: '0' });
            }

            // if (counterEastMain === 0) {

            //     window.location.href = "index.html";

            // }
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
