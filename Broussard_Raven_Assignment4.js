/*  Raven "Nikki" Broussard
    01/29/2015
    Project 4
    Making a library of code
 */

//  Global Varibles

var myLibrary = function() {

//  String Functions

//  Does a string follow a 123-456-7890 pattern like a phone number?



//  Does a string follow an aaa@bbb.ccc pattern like an email address?


//  Is the string a URL? (Does it start with http: or https:?)


//  4. Title-case a string (split into words, then uppercase the first letter of each word)

    function addCaps(changeCase) {
        String.prototype.toProperCase = function() {
            return this.replace(/\w\S*/g, function (words){
                return words.charAt(0).toUpperCase() + words.substr(1).toLowerCase();
            })
        };
        changeCase.toProperCase();
        console.log(changeCase.toProperCase());
    }

//  5. Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

    var separatorChange = function(items, sepItems1, sepItems2) {

        var message = "";
        var sepArray = items.split(sepItems1);
        var i = 0;

        while(i < sepArray.length) {

            var newChange = sepArray[i];
            i++;
            message += newChange + sepItems2;
        }
        return message;
    }

//  Number
//  6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

    var fixedDecimal = function(place){
        var decimalPlace = place.toFixed(2);
        return decimalPlace;
    }

//  Fuzzy-match a number: is the number above or below a number within a certain percent?


//  8. Find the number of hours or days difference between two dates.

    var timePassed = function (startDate, endDate) {
        var fullDay = 1000 * 60 * 60 * 24;
        var start = new Date(startDate);
        var end = new Date(endDate);
        var comp = Math.ceil((end - start) / fullDay);
        return comp;
    };

//  Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var changeType = function(change){
        var stringNumber = parseInt(change);
        return stringNumber;
    }

//  Array
//  Find the smallest value in an array that is greater than a given number.


//  Find the total value of just the numbers in an array, even if some of the items are not numbers.


//  Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].


// Returns

    return {
        "timePassed" : timePassed,
        "fixedDecimal" : fixedDecimal,
        "addCaps" : addCaps,
        "separatorChange" : separatorChange,
    }
}

//  Inputs
var input = new myLibrary();

// Outputs

console.log(input.timePassed("January 5, 2015", "January 29, 2015") + " days since we started SDI ")
console.log(input.fixedDecimal(876.09743578));
console.log(input.addCaps("i hope this works."));
console.log(input.separatorChange("a,b,c", ",", "/"));