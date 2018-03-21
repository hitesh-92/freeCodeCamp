// function chunkArrayInGroups(arr, size) {
//
//   var newArr = [];
//   for(var i = 0; i < arr.length; i+=size){
//     newArr.push(arr.slice(i, i+size))
//   };
//   console.log(`newArr:  ${newArr}`);
//
//   console.log("\nWHILE\n");
//
//   var resArr = [];
//   while(arr.length){
//   resArr.push(arr.splice(0, size))
//   }
//   console.log(`resArr:  ${resArr}`);
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

//ANSWER

function chunkArrayInGroups(arr, size) {
  var resArr = [];
  while(arr.length){
  resArr.push(arr.splice(0, size))
  }
  return resArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
