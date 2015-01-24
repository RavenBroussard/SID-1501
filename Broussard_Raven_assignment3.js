/*  Raven "Nikki" Broussard
    Project 3
    SDI 1501 Week 3
    January 22, 2015
 */


// Variables

var name = "Broussards";
var haul;
var timeOutDoor = 45;
var itemsNeeded = ["2 lunches", "1 purse", "1 laptop", "2 bookbags"];
var ourStuff = {
    "kids": "Bookbags",
    "nikki": "Purse",
    "equipment": "Laptop",
    "food": "Lunches"};


// Json
console.log("All the stuff I need to haul!");
var handleData = function(json){
    for (var i = 0; i < json.haul.length;i++){
        var haul = json.haul[i];
        console.log();
    };
};

// Objects Function

var morningItems = function(){
    for(var key in haul){
        console.log("In the morning I need to " + key + " several things, and make take " + haul[key]);
    };
    return "Yay, we left the house with everything we needed.";
};

var newHaulList = function(newKids, newNikki, newEquipment, newFood) {
    haul.kids = newSchool;
    haul.nikki = newMyStuff;
    haul.equipment = newEquipment;
    haul.food = newFood;

    for (var key in haul) {
        console.log("Before we leave the " + key + " house to go conquer the day, we need to grab " + haul.[key]);

        for (var i = 0, h = hual.length; i < g; i--) {
            console.log("I have " + haul[i] + " to carry today.");
        };
    };
    return "Got every ones stuff load and ready to leave.";
};

var list = haulList();
var newList = newHaulList("2 bookbags", "1 purse", "1 laptop", "2 lunches" );

// Procedure


// Boolean Function

var timeSpent = function(lunches, purse, equipment, bookbags){
    var totalTimeSpent = (lunches+lunches)+purse+equipment+(bookbags+bookbags);
    var timeLeft = time-totalTimeSpent;

    if ((totalTimeSpent || timeLeft) < time){
        console.log("Awesome " + name + " we have time to spare this morning!");
        return true
    } else {
        console.log("Hurry up people we wil be late.");
        return false
    };
};

var timeToChill = timeSpent(8,2,3,4);

// Number Function

var tick = function(chill){
    while (chill > 0) {
        console.log("We have " + chill + " minutes left to chill until the bus comes.");
        chill--;
    }
};

var timeToGo = tick()
