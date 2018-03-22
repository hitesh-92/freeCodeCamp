// function destroyer(arr) {
//   var args = [].slice.call(arguments);
//   var seek = args.slice(1,args.length);
//
//   var res;
//
//
//   for(var i = 0; i < seek.length; i++){
//
//
//     res = arr.filter(function(value){
//       if(!seek.includes(value)){
//         return value
//       }
//     });
//     console.log(`loop${i}: ${res}`);
//   }
//
//   console.log(`\nres: ${res}`);
//
// }
//
// destroyer([3, 5, 1, 2, 2], 2, 3, 5);
// console.log(`\n------------\n`);




//ANSWER
function destroyer(arr) {
  var args = [].slice.call(arguments);
  var seek = args.slice(1,args.length);
  var res = arr.filter(function(value){
    if(!seek.includes(value)){
      return value
    }
  });
  return res;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
