// function largestOfFour(arr) {
//   var resultsArray = [];
//   var res = [];
//   for (var i = 0; i < arr.length; i++){
//     //console.log(i);
//     //console.log(arr[i]+'    arr[i]');
//
//     var x = arr[i].sort(function(a,b){return b-a});   //console.log(x+'   x');
//
//     //console.log(x[0]);
//
//     res.push(x[0]);
//
//   }
//   //console.log(res+'     res');
//
//   //return resultsArray;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//ANSWER
function largestOfFour(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++){
    var x = arr[i].sort(function(a,b){return b-a});
    res.push(x[0]);
  }
  return res
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
