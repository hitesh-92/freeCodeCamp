function spinalCase(str) {

  // str = str.toLowerCase();

  var regex = /\w/;

  // str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // str = str.replace(/[^a-z]/gi, '-')
  // str = str.replace(/\s+|_+/g, '-');
  // str = str.replace(/(a-z)(A-Z)/g, '$1 $2')
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/\s+|_+/g, '-')


  console.log(str)


}
spinalCase('ThisIsSpinalTap');
spinalCase("This Is Spinal Tap")
spinalCase("The_Andy_Griffith_Show")


// UNABLE TO SOLVE!
