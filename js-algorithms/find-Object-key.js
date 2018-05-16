// function whatIsInAName(collection, source) {
//
//   // var arr = [];
//
//   // var res = new Array();
//   // Object.keys()
//   // console.log(collection[0]);
//   // console.log(Object.keys(collection[2]));
//
//   cKey = Object.keys(collection[0])
//   sKey = Object.keys(source)
//   sKeyVal = Object.values(source)
//   // console.log(`cKeys: ${cKey[1]}\nsKeys: ${sKey}\nsKeyVals: ${sKeyVal}`);
//   // console.log(collection['first']);
//
//   for (var i in collection) {
//   //
//     if (collection[i].hasOwnProperty(sKey)) {
//   //     // console.log(collection[i] );
//       console.log(collection[i][sKey]); //last
//   //     // console.log(Object.values(collection[i])); // object values
//   //     // var val = Object.values(collection[i]); console.log(val[0]); //value for each object
//   //
//   //     var key = collection[i][sKey]
//   //     // var match = key == sKeyVal
//   //     // console.log(match);
//   //
//   //     if (key == sKeyVal){
//   //       x = collection[i]
//   //       res.push(i)
//   //       // console.log(collection[i]);
//       // }
//   //
//     }
//   //   // console.log(i);
//   }
//
//
//   // for (i in sKeyVal) {
//     // console.log(i);
//     // for (var k in collection) {
//       // if (collection[k].hasOwnProperty(i)) {
//       //   console.log(collection[k]);
//       //
//       // }
//       // console.log(k);
//   //   }
//   //   console.log(i);
//   // }
//
//   // cKeys = Object.keys(collection)
//
//   // console.log(Object.values(collection));
//   // console.log('-----------');
//   // console.log(collection[2]);
//
//   // return arr;
//   // console.log(`\n---\n${res}\n---\n`);
// }
//
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
