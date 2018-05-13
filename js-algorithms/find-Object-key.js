function whatIsInAName(collection, source) {

  // var arr = [];

  var res = [];
  // Object.keys()
  // console.log(collection[0]);
  // console.log(Object.keys(collection[2]));

  cKeys = Object.keys(collection[0])
  sKeys = Object.keys(source)
  // console.log(`cKeys: ${cKeys}\nsKeys: ${sKeys}`);
  // console.log(collection['first']);
  for (var key in collection) {
    // if (object.hasOwnProperty(key)) {
      console.log(collecion[key]);
    // }
  }


  // cKeys = Object.keys(collection)




  // return arr;
  // console.log(`\n---\n${res}\n---\n`);
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
