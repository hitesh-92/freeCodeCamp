/*
function diffArray(arr1, arr2) {

  var ar1 = arr1.sort((a,b) => {return a-b}).toString().split(',');
  var ar2 = arr2.sort((a,b) => {return a-b}).toString().split(',');
  var longer = (ar1.length > ar2.length) ? true : false;
  // console.log(longer);
  var res = [];


  for(var i = 0; i < ar2.length; i++){
    console.log(`i: ${ar2[i]}`);

    var compare = ar1.includes(ar2[i]);
    console.log(compare);

    if(compare == false){
      res.push(ar2[i]);
    }
  }

  for(var i = 0; i < ar1.length; i++){

    var compare = ar2.includes(ar1[i]);

    if(compare == false){
      res.push(ar1[i]);
    }
  }


  console.log(`\n---\n${res} \n---`);
  // return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
*/
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);



//Answer for ES6!
/*
function diffArray(arr1, arr2) {

  var ar1 = arr1.sort((a,b) => {return a-b}).toString().split(',');
  var ar2 = arr2.sort((a,b) => {return a-b}).toString().split(',');
  var res = [];

  var array2 = () => {
    for(var i = 0; i < ar2.length; i++){
      var compare = ar1.includes(ar2[i]);
      if(compare == false){
        res.push(ar2[i]);
      }
    }
  };

  var array1 = () => {
    for(var i = 0; i < ar1.length; i++){
      var compare = ar2.includes(ar1[i]);
      if(compare == false){
        res.push(ar1[i]);
      }
    }
  };

  array1();
  array2();

  var results =  res.sort((a,b) => {return a-b});
  return results
}
*/

//answer




function diffArray(arr1, arr2) {

  var ar1 = arr1.sort(function(a,b){return a-b});
  var ar2 = arr2.sort(function(a,b){return a-b});
  var res = [];

  var array1 = function(){
    for(var i = 0; i < ar1.length; i++){
      var compare = ar2.includes(ar1[i]);
      if(compare == false){
        res.push(ar1[i]);
      }
    }
  };

  var array2 = function(){
    for(var i = 0; i < ar2.length; i++){
      var compare = ar1.includes(ar2[i]);
      if(compare == false){
        res.push(ar2[i]);
      }
    }
  };
  array1();
  array2();

  return res;





};
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
