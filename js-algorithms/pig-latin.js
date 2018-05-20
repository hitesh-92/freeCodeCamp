// function translatePigLatin(str) {
//   count = 0;
//
//   while (true) {
//     word = str.toLowerCase();
//     for (i of word) {
//       // console.log(i); //prints word
//       if (i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
//         break;
//       } else {
//         count += 1;
//       }
//     }
//     break
//   };//while
//
//
//   var result = function(word, count){
//     // x = word.substr(count);
//     // console.log(`x: ${x}`);
//
//     if (count == 0){
//       return `${str}way`;
//     } else if (count == 1){
//       body = word.substr(1);
//       letter = str[0];
//       return `${body}${letter}ay`;
//     } else {
//       strLength = word.length;
//       body = word.substr(count,strLength);
//       first = word.substr(0,count);
//       return `${body}${first}ay`
//
//
//     }
//   };//result
//
//   res = result(str, count)
//   console.log(res);
//
//   // if (count == 1){
//   //   return
//   // }
//
//
// }

translatePigLatin("glove");


//ANSWER

function translatePigLatin(str) {
  count = 0;

  while (true) {
    word = str.toLowerCase();
    for (i of word) {
      if (i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
        break;
      } else {
        count += 1;
      }
    }
    break
  };


  var result = function(word, count){

    if (count == 0){

      return `${str}way`;

    } else if (count == 1){

      body = word.substr(1);
      letter = str[0];
      return `${body}${letter}ay`;

    } else {

      strLength = word.length;
      body = word.substr(count,strLength);
      first = word.substr(0,count);
      return `${body}${first}ay`

    }
  };

  return result(str, count)

}
