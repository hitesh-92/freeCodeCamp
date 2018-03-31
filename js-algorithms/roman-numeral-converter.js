function convertToRoman(num) {

  var numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var letters = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var number = num;
  var result = '';

    for (var i = 0; i < numbers.length; i++) {
      while (numbers[i] <= num) {
        console.log(`number: ${numbers[i]}`);
        console.log(`leterrs: ${letters[i]}`);

        result += letters[i];
        console.log(`result: ${result}`);


        num -= numbers[i];
        console.log(`num: ${num}\n`);
      }
    };



 console.log(`\n---\n  ${result}  \n---`);
}
convertToRoman(36);



//Answer

function convertToRoman(num) {
  var numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var letters = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var number = num;
  var result = '';
    for (var i = 0; i < numbers.length; i++) {
      while (numbers[i] <= num) {
      result += letters[i];
      num -= numbers[i];
      }
    };
  return result;
}
convertToRoman(36);
