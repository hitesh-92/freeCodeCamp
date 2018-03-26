/**///+--+--+--++--+--+--++--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//for loop--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//while loop--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//math--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
//
Math.floor(Math.random() * (max - min + 1)) + min

//expressions--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
//string
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
var expression = /and/gi; //"and" = the word want to find
                          //g = global, causes pattern to return all matches in the string
                          //i  = ignore(upper/lower case)
var andCount = testString.match(expression).length;

//numbers
var testString = "There are 3 cats but 4 dogs.";
var expression = /\d+/g; // "\d+" = ("d" = digit selector) ("+" appended allows to match more than 1 digit)
var digitCount = testString.match(expression).length;

//whitespace
var testString = "How many spaces are there in this sentence?";
var expression = /\s+/g;  // "\s+" counts all whitespace includes - (" ", \r, \n, \t, \f)
var spaceCount = testString.match(expression).length;

//invert-whitespace (counts everything not-whitespace)
var testString = "How many non-space characters are there in this sentence?";
var expression = /\S/g; // "\S" counts everything not whitespace. NOTE: no need for "+"
var nonSpaceCount = testString.match(expression).length;

//array.map--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray); // returns [1, 2, 3]

//array.reduce--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var array = [4,5,6,7,8];
var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(singleVal)// 30

//array.filter--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
array = array.filter(function(val) {
  return val !== 5; //filters out all values not == to 5
});

//array.sort--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b; //sorts array for smallesValue to biggestValue
});

//array.reverse--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var myArray = [1, 2, 3];
myArray.reverse();
//new myArray =[3, 2, 1];

//array.concat--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
//newArray = oldArray.concat(otherArray);
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);

//array.split--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var string = "Split me into an array";
var array = [];
array = string.split(' '); //split array by " " (space)
//string=array = string.split('

//array.join--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+//
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = joinMe.join("+"); //all values of array join with "+" //result =>
joinedString = "Split+me+into+an+array";// could use " " to form complete sentence
