function palindrome(str) {
  //lowercase string
  var lowerStr = str.toLowerCase();       console.log(lowerStr + '    lowerStr');
  //string with speical chars removed (expression)
  var expStr = lowerStr.replace(/[_\W]+/g, "");         console.log(expStr + '    expStr');
  //compareStr
  var compareStr = expStr.split("").reverse().join(""); console.log(compareStr+'    compareStr');
  if (compareStr === expStr){
    return true;
  } else {
    return false;
  }
}
palindrome("eye");