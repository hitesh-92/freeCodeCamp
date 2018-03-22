function getIndexToIns(arr, num) {
  var sorted =  arr.sort(function(a,b){return a-b});
  console.log(`\nsorted:  ${sorted}  |  num to insert: ${num}`);

  function insert(value){
    return value >= num
  }

  var result =  sorted.findIndex(insert);

  if(result === -1){
    return arr.length;
  } else {
    return result;
  }


  console.log(`\nresult: ${result}`);

}

getIndexToIns([2, 5, 10], 15);

//Answer
function getIndexToIns(arr, num) {
  var sorted =  arr.sort(function(a,b){return a-b});

  function insert(value){
    return value >= num
  }

  var result =  sorted.findIndex(insert);

  if(result === -1){
    return arr.length;
  } else {
    return result;
  }
}

getIndexToIns([2, 5, 10], 15);
