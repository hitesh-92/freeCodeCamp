// function slasher(arr, howMany) {
//   resArr = arr;  console.log(`resArr:  ${resArr}  |  howmany:  ${howMany}\n`);
//
//   for(var i = 0; i < howMany; i++){
//     resArr.shift();
//   }
//   console.log(`after shift:  ${resArr}`);
//   return arr;
// }
//
// slasher([1, 2, 3], 2);


//Answer
function slasher(arr, howMany) {
  resArr = arr;
  for(var i = 0; i < howMany; i++){
    resArr.shift();
  }
  return resArr;
}

slasher([1, 2, 3], 2);
