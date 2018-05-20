// function uniteUnique(arr) {
//   var vArr = new Array();
//   var res = new Array();
//
//   for (var i = 0; i < arguments.length; i++) {
//     var arg = arguments[i];
//     console.log(`${arg.length} | ${arg}`);
//     // vArr.push(arg);
//
//     for (var y = 0; y < arg.length; y++){
//       vArr.push(arguments[i][y])
//     }
//
//   }
//
//   // console.log(vArr);
//
//   var x = new Set(vArr);
//   // console.log(x);
//
//   for (i of x) {
//     console.log(i);
//     res.push(i);
//   }
//
//   console.log(res);
//
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);


//best solution
function uniteUnique(arr) {
  const args = [].concat(...arguments);
  return [...new Set(args)];
}

//Answer

// function uniteUnique(arr) {
//   var vArr = [];
//   var res = [];
//   for (var i = 0; i < arguments.length; i++) {
//     var arg = arguments[i];
//     for (var y = 0; y < arg.length; y++){
//       vArr.push(arguments[i][y])
//     }
//   }
//   var vals = new Set(vArr);
//   for (i in vals){
//     res.push(i);
//   }
//   return res
// }
