// function pairElement(str) {
//   var result = new Array();
//   dna = str.split('');
//
//   var pair = function(val){
//     switch (val) {
//       case 'A':
//         result.push(['A','T']);
//         break;
//       case 'T':
//         result.push(['T','A']);
//         break;
//       case 'G':
//         result.push(['G','C']);
//         break;
//       case 'C':
//         result.push(['C','G']);
//     };//switch
//   };//pair
//
//
//   for (i of dna) {
//     // console.log(i);
//     pair(i);
//   };
//
//   console.log(result);
//
// }

pairElement("GCG");


//ANSWER

function pairElement(str) {
  var result = new Array();
  dna = str.split('');

  var pair = function(val){
    switch (val) {
      case 'A':
        result.push(['A','T']);
        break;
      case 'T':
        result.push(['T','A']);
        break;
      case 'G':
        result.push(['G','C']);
        break;
      case 'C':
        result.push(['C','G']);
    };
  };

  for (i of dna) {
    pair(i);
  };

  return result
};
