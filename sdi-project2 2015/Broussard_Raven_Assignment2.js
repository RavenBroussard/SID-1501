/* Raven "Nikki" Broussard
   01/15/15
   Project 2
   Making it all work
 */

// Variables

var caylaMood = false;
var familyMembers = ["Nikki", "Cayla", "Cyrus", "Snowflake"];
var time = 0625;
var positiveMood = "I want you to know that you are \"Awesome\" just by being yourself!";
var selfEsteem = "Tell me something that makes you special?";
var loveLost = 3;
var therapyTime = 10

//  Boolean
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
    var timeToMakeItHappen = 0542;

    if (timeToMakeItHappen > moveit){
        late = true;
    }
    else{
        late = false;
    }
    return late;


}

// While loop my nemesis
var cayla = function(therapy){
    var feelBetter;
    var caylaWorkout = 2;
    while (therapy >= caylaWorkout) {
        console.log("Cayla needs " + caylaWorkout + " minutes to feel better.");
        caylaWorkout = caylaWorkout + 2;
        feelBetter = (caylaWorkout / 2) - 1;

    }
    return feelBetter;
}

// String Function
var goodMornings = function(first, second)
{
    var middle = " I love you! ";
    var conversation = first + middle + second;
    return conversation;
}

// Array

var familyFirst = function(people, love)
{
    for (i = 0; i < 4; i++)
    {
    console.log(people[i]);
    }
    console.log("I forgot to feed ");
    return people[love];
}

// Outputs

console.log("My alarm clock screams hey it's time to start the day");

morningRoutine(true);

console.log ("The bus arrives at 0645");
console.log ("Do we have time before the bus " + "it's only " + time + " ?" );

    if (letsGetGoing(time) === true)
{
    console.log("Yes we do");
}
    else
    {
        console.log("Grab your bags the bus is here!");
    }
console.log("Cayla requires therapy to help with her condition" + " we do each section in two minute intervals.");
console.log("We cover a total of " + cayla(therapyTime) + " body parts.");

console.log("I remind the children of who they are, " + goodMornings(positiveMood, selfEsteem) );
console.log("The people I am responsible for in the mornings are ");
console.log(familyFirst(familyMembers,loveLost ) + " , aww poor hamster.");