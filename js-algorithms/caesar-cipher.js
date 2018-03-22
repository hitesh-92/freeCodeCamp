function rot13(str) { // LBH QVQ VG!
  var splitStr = str.split("");
  console.log(`splitStr: ${splitStr}`);
  // console.log(`\n`+splitStr[0][0]);

  var resStr = [];
    for(var i = 0; i < str.length; i++){
      // console.log(`${i}:`+splitStr[i].charCodeAt(0));
      // var each = splitStr[i];
      // var coded = each.charCodeAt(0) - 13;
      // var res = String.fromCharCode(coded);
      // charStr.push(res);
      // console.log(each+coded);

      // var each = splitStr[i];
      // console.log(`${each}`);

      var x = str.charCodeAt(i);
      // console.log(`x::  ${x}`);

      if(x >= 65 && x <= 77){
        resStr.push(String.fromCharCode(x+13))
      } else if (x >= 78 && x <= 90){
        resStr.push(String.fromCharCode(x-13))
      } else {
        resStr.push(String.fromCharCode(x))
      }

      // if(x > 65 || x < 95){
      //   var res = String.fromCharCode(x);
      //   charStr.push(res);
      // } else if (x < 78) {
      //   var res = String.fromCharCode(x+13);
      //   charStr.push(res);
      // } else {
      //   var res = String.fromCharCode(x-13);
      // }




      // for(var j = 0; j < each.length; j++){
      //   var x = each[j].charCodeAt(0);
      //   // console.log(coded);
      //   // if(coded < 78){
      //     charStr.push(String.fromCharCode(x-13));
      //   // }
      // }


    }//for loop


    var res = resStr.join("");
    console.log(`res: ${res}`);

  // console.log(`\ncharStr:  ${charStr}`);

  // var res = String.fromCharCode(70,56,69,69,32,67,53);
  // console.log(`res: ${res}`);


  // console.log(`resArr:  ${resArr}`);
}


rot13("SERR PBQR PNZC")
// console.log(`\n------------\n`);
//String.fromCharCode(65, 66, 67);  // returns "ABC"
//var res = String.fromCharCode(65);


//ANSWER

function rot13(str) {
  var splitStr = str.split("");
  var resStr = [];
    for(var i = 0; i < str.length; i++){
    var x = str.charCodeAt(i);
    if(x >= 65 && x <= 77){
        resStr.push(String.fromCharCode(x+13))
      } else if (x >= 78 && x <= 90){
        resStr.push(String.fromCharCode(x-13))
      } else {
        resStr.push(String.fromCharCode(x))
      }
    }
    var res = resStr.join("");
    return res;

}
rot13("SERR PBQR PNZC")
