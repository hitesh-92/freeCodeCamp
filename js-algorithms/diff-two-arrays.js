function diffArray(arr1, arr2) {

  var ar1 = arr1.sort((a,b) => {return a-b}).toString().split(',');
  var ar2 = arr2.sort((a,b) => {return a-b}).toString().split(',');
  var longer = (ar1.length > ar2.length) ? true : false;
  // console.log(longer);
  var res = [];

  if(longer == true){
    for(var i = 0; i < ar2.length; i++){
      // console.log(ar2[i]);
        for(var x = 0; x < ar1.length; x++){
          // console.log(ar1[x]);
          if(!ar2[i] === ar1[x]){
            console.log(ar2[i]);
          }
        }
    }
  };






  // console.log(`\n---\n${all} \n---`);
  // return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
