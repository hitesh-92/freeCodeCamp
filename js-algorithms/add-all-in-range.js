function sumAll(arr) {
  var sorted = arr.sort((a,b) => {return a-b});
  var numone = sorted[0]; var numtwo = sorted[1];
  var res = 0;
  for(var i = numone; i <= numtwo; i++){
    res += i;
  }



  // console.log(`\n---\n**res: ${res} \n---`);
  return res;
}

sumAll([10, 5]) //should return 45.
