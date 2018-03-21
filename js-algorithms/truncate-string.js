/*
function truncateString(str, num) {

  var strLength = str.length;
  console.log(`strLength: ${strLength} | num: ${num}`);
  var end = ["..."];
  var maxSlice = num - 3;


  if(num > strLength){
    console.log(`num > strLength`);
    var result = str.concat(end);
    console.log(`RESULT: ${result}`);
    return result;
  }

  if(3 >= num){
    console.log(`3 >= num`);
    var result = str.slice(0,num).concat(end);
    console.log(result);
    return result;
  }

  if(strLength == num){
    console.log(str);
    return str;
  }

  //main
  var result = str.slice(0, maxSlice).concat(end);
  // return result;
  console.log(`newStr:  ${result}`);

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
console.log("\n---");
*/


//ANSWER

function truncateString(str, num) {
  var strLength = str.length;
  var end = ["..."];
  var maxSlice = num - 3;

  if(num > strLength){
    return str;
  }

  if(3 >= num){
    var result = str.slice(0,num).concat(end);
    return result;
  }

  if(strLength === num){
    return str;
  }

  var result = str.slice(0, maxSlice).concat(end);
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
