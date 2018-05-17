// function translatePigLatin(str) {
//
//   //funciton to first if first letter == vowel
//   var check = function(letter){
//     i = letter.toLowerCase();
//     if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//       return true
//     } else {
//       return false
//     }
//   };
//
//   //fuct to cut first letter append to end + 'ay'
//   var piglatin = function(word){
//     letter = word.substr(0,1)
//     end = letter += 'ay'
//     body = word.substr(1)
//     return `${body}${end}`
//   }
//
//   first = check(str[0])
//
//   if (first){
//     console.log(str += 'way');
//   } else {
//     console.log(piglatin(str));
//     // return piglatin(str)
//   }
//
// }

translatePigLatin("consonant");


//ANSWER


function translatePigLatin(str) {
  var check = function(letter){
    i = letter.toLowerCase();
    if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
      return true
    } else {
      return false
    }
  };

  var piglatin = function(word){
    letter = word.substr(0,1)
    end = letter += 'ay'
    body = word.substr(1)
    return `${body}${end}`
  }

  first = check(str[0])

  if (first){
    return `${str}way`
  } else {
    return piglatin(str)
  }

}
