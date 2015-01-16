/* Raven "Nikki" Broussard
   01/15/15
   Project 2
   Making it all work
 */

// Variables

var caylaMood = false;
var familyMembers = ["Nikki", "Cayla", "Cyrus"];
var timeForBus = 0645;
var positiveMood = "I want you to know that you are \"Awesome\" just by being yourself!";
var selfEsteem = "Tell me something that makes you special?"
var caylaWorkout = 2;

var morningRoutine = function (alarmClock){
    if (alarmClock === true)
    {
        console.log("Stupid clock never let's me sleep, I love you, but I hate you!");
    }
    else
    {
        console.log("Hmm, I wonder why I can't sleep.");
    }
}


var letsGetGoing = function (moveit){
    var late;
    var timeToMakeItHappen = 0700;

    if (timeToMakeItHappen > late){
        late = true;
    }
    else{
        late = false;
    }
    return late;


}

var cayla = function(therapy){
    var feelBetter;
    var caylaWorkout = 2;
    while (minutes >= feelBetter) {
        console.log("Cayla needs " + caylaWorkout + " minutes to feel better.");
        caylaWorkout = caylaWorkout + 2;
        feelBetter = (caylaWorkout / 2) - 1;

    }
    return feelBetter;
}

var goodMornings = function(first, second)
{
    var middle = "You're so special ";
    var conversation = first + middle + second;
    return conversation;
}

