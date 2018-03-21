// function mutation(arr) {
//   var firstItem = arr[0].toLowerCase().split('');
//   var secondItem = arr[1].toLowerCase().split('');
//   console.log(`firstItem:  ${firstItem}  |  secondItem:  ${secondItem}`);
//   var x = firstItem.length; var y = secondItem.length; console.log(`\nLENGTH:- first:  ${x}  |  second:  ${y}\n`);
//   var result;
//
//   for(var i = 0; i < secondItem.length; i++){
//     result = firstItem.indexOf(secondItem[i]) !== -1;
//     if(result === false){
//       return false
//     }
//   }
//   console.log(`result:  ${result}`);
// }
// mutation(["voodoo", "no"]);
// console.log(`\n-----------\n`);



//Answer
function mutation(arr) {
  var firstItem = arr[0].toLowerCase().split('');
  var secondItem = arr[1].toLowerCase().split('');
  var result;

  for(var i = 0; i < secondItem.length; i++){

    result = firstItem.indexOf(secondItem[i]) !== -1;
    if(result === false){
      return false
    }
  }
  return result;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
