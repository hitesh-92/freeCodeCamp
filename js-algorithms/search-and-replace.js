// function myReplace(str, before, after) {
//   splitstr = str.split(' ');
//   res = [];
//   // console.log(splitstr.length);
//
//   splitstr.forEach(function(i){
//
//     if (i === before){
//       if (i[0] == i[0].toUpperCase()){
//         r = after.replace(/^[a-z]/, function (x) {return x.toUpperCase()})
//         // console.log(r);
//         res.push(r)
//       }
//
//     } else {
//       res.push(i)
//     }
//
//   });
//
//   console.log(res.join(" "));
// };

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("Let us get back to more Coding", "Coding", "algorithms")


//ASNWER

function myReplace(str, before, after) {
  splitstr = str.split(' ');
  res = [];
  splitstr.forEach(function(i){

    if (i === before){
      if (i[0] == i[0].toUpperCase()){
        r = after.replace(/^[a-z]/, function (x) {return x.toUpperCase()})
        // console.log(r);
        res.push(r)
      } else {
        res.push(after)
      }

    } else {
      res.push(i)
    }
  });

  return res.join(" ");
  // console.log(res.join(" "));
};

myReplace("Let us go to the store", "store", "mall")
