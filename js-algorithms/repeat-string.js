// function repeatStringNumTimes(str, num) {
//   var s = "";
//   var string = str;
//   var newArray = [];
//   for (i = 0; i < num; i++){
//     newArray.push(str);
//   }
//   console.log(newArray+'    str for');
//   var x = newArray.join(" "); console.log(x)+'     x concat';
//   return x;
// }
// repeatStringNumTimes("abc", 3);


//ANSWER
function repeatStringNumTimes(str, num) {
  var string = str; var newArray = [];
  for (i = 0; i < num; i++){
    newArray.push(str);
  }
  var x = newArray.join("");
  return x;
}

repeatStringNumTimes("abc", 3);