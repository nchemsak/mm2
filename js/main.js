// EYE JS
"use strict";

var counterNorth = 49;
var counterEast = 48;
var counterEastMain = 165;

// Open SIDE OPTIONS MENU when letter 'O' is pressed on keyboard
var direction = "north";

// Change the counter and background-position of bee when leaving the shop
if (window.location.href.indexOf("left-recipe-shop") > -1) {
    var counterNorth = 70;
    $(".eagle-eye").css("background-position", "48% 71%");

} else if (window.location.href.indexOf("left-katsura") > -1) {
    console.log("Coutnter east", counterEast);
    var counterEast = 13;
    var counterNorth = 49;
    $(".eagle-eye").css("background-position", "13% 49%");

} else {
    $(".eagle-eye").css("background-position", "48% 49%");
}


function toggleQuote() {
    $('#home-page-quote').toggleClass('d-none');
}


// Function to call to open SIDE OPTIONS MENU and toggle bee when link is clicked

function toggleOptions() {
    $('.toggle').toggleClass('options-menu-off options-menu-on');
    $('.bee1').toggleClass('hide-bee show-bee');
    $('.bee2').toggleClass('hide-bee show-bee');
    $('#options-menu').toggleClass('d-none d-block');
}

var keydownCounter = 0;


$(document).keydown(function(e) {
    // console.log("e", e);
    let loopCounter = +keydownCounter;
    // console.log("loop Counter", loopCounter);
    // console.log("event",event);
    if (loopCounter = 1) {
        var event = e.which;

    }
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
        // Prevent bee from leaving top of screen
        if (counterNorth <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" - 7 + "%");
            // console.log("counterNorth", counterNorth);
        } else {
            counterNorth = counterNorth - 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
        }

        $(".direction").attr("class", "direction north");

        console.log("counterNorth", counterNorth);

        //////////////////////////// EAST ///////////////////////////////////
    } else if (event === 39) {
        var direction = "east";
        console.log("counterEast", counterEast);
        console.log("counterNorth", counterNorth);


        if (counterEast <= -7) {
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");
            $(".bee1").addClass("bee-flip");
            $(".bee2").addClass("bee-flip");
        }

        // Prevent bee from leaving right side of screen
        if (counterEast === 90) {
            console.log("counterNorth", counterNorth);
            $(".eagle-eye").css("background-position", counterEast + "%" - 7 + counterNorth + "%");

        } else {
            counterEast = counterEast + 7;
            counterEastMain = counterEastMain + 55;

            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
            $(".bee1").addClass("bee-flip");
            $(".bee2").addClass("bee-flip");
            $(".main-bee1").addClass("bee-flip");
            $(".main-bee2").addClass("bee-flip");

            console.log("counterEastMain", counterEastMain);
            // INSIDE RECIPE ShOP
            if (counterEastMain <= 550) {
                $(".main-bee1").css("left", (counterEastMain) + "px");
                $(".main-bee2").css("left", (counterEastMain) + "px");
            }

            if (counterEastMain === 550) {
                $(".header-image").append('<div id="recipe-popup" class="popover fade show bs-popover-top" role="tooltip" x-placement="top"><div class="arrow" style="right: 26px;"></div><div class="popover-body">Hi, Welcome to my shop! <br /> What recipe would you like to learn? <br />Please select a recipe from the menu on the right.</div></div>');
                $("#recipe-popup").animate({ opacity: '0.8' });
            }
            // prevent bee counter from going past a set amount in recipes
            if (counterEastMain > 550) {
                counterEastMain = 550;

            }

            // if (counterEast > 83) {
            //     counterEast = 83;
            // }

        }
        $(".direction").attr("class", "direction east");




        //////////////////////////// SOUTH ///////////////////////////////////
    } else if (event === 40) {
        console.log("counterNorth", counterNorth);

        // if (direction === "south") {
        //     counterNorth = counterNorth + 7;
        //     $(".eagle-eye").css("background-position", "48%" + counterNorth + "%");

        // } else {
        //     var direction = "south";
        // }
        var direction = "south";

        $(".direction").attr("class", "direction south");
        if (counterNorth < -7) {
            console.log("error at top");
            $(".eagle-eye").css("background-position", counterEast + "%" + -7 + "%");
        }

        else if (counterNorth > 91) {
            console.log("hey");
                $(".eagle-eye").css("background-position", counterEast + "%" - 7 + counterNorth + "%");
            }

        else {
            counterNorth = counterNorth + 7;
            $(".eagle-eye").css("background-position", counterEast + "%" + counterNorth + "%");
        }



        //////////////////////////// WEST ///////////////////////////////////
    } else if (event === 37) {
        var direction = "west";
        // Prevent bee from leaving left side of screen
        if (counterEast <= 14) {
            $(".eagle-eye").css("background-position", counterEast + "%" - 7 + counterNorth + "%");
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

            if (counterEastMain === 0 && window.location.href.indexOf("recipe-book") > -1) {
                window.location.href = "index.html?left-recipe-shop";
            }


            if (counterEastMain === 0 && window.location.href.indexOf("katsura") > -1) {
                window.location.href = "index.html?left-katsura";
            }


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

    if (counterEast === 13 && counterNorth === 63) {
        console.log("Welcome to the tree!");
        window.location.href = "katsura.html";
    }


    // var mainBeeCounter = 5;
    // if (event === 39) {
    //     var mainBeeCounter = mainBeeCounter + 20;
    //     $(".main-bee").css("left", mainBeeCounter + 20 + "px");
    //     // $(".eagle-eye").css("background-position", counterEast + "%" + -7 + counterNorth + "%");
    // }


    // SCROLL TO LINK
    $("a.page-scroll").click(function(event) {
        event.preventDefault();
        $("#main-content").animate({ scrollTop: $($(this).attr("href")).offset().top - 35 }, 1000);

    });

});



function firstVisit() {
    console.log("First Ever Visit");
    $("body").addClass('first-visit-body-overlay');
    $(".overlay").css("width", "100%");
}


function closeNav() {
    $(".overlay").css("width", "0%");

}



function recipeShopVisit() {
    $("body").addClass('first-visit-body-overlay');
    $(".overlay").css("width", "100%");
}
