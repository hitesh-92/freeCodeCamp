// function bouncer(arr) {
//
//   var falsy = false || null || 0 || "" || undefined || NaN;
//
//   var result;
//   // result = arr.filter(i => false && null && 0 && "" && undefined && NaN);
//   // console.log(`RESULT: ${arr}`);
//
//
//
//   // function isFalsy (x){
//   //   if (x !== falsy){
//   //     return value
//   //     }
//   //   }
//   //
//   // result = arr.filter(isFalsy);
//   // console.log(`RESULT: ${result}`);

// bouncer([7, "ate", "", false, 9]);
// console.log(`\n-------------\n`);


//Answer
function bouncer(arr){
  var falsy = false || null || 0 || "" || undefined || NaN;
  function isFalsy (x){
    if (x !== falsy){
      return x
    }
  }
  return result = arr.filter(isFalsy);
}
bouncer([7, "ate", "", false, 9]);
