function fearNotLetter(str) {

  // for (i of str) {
  //   console.log(str.charCodeAt(1));
  //   console.log(i+`\n--`);
  // }

  for (var i = 0; i < str.length-1; i++) {
    // console.log(str[i]);
    // console.log(str.charCodeAt(i));
    current = str.charCodeAt(i);
    next = str.charCodeAt(i+1);

    if((current+1) != next){
        res = String.fromCharCode(current+1);
        return console.log('PING'+`\n${res}`);
    }

  };

  return console.log('undefined');

  // return str;
}

fearNotLetter("abcd");

//ASNWER

function fearNotLetter(str) {
  for (var i = 0; i < str.length-1; i++) {
    current = str.charCodeAt(i);
    next = str.charCodeAt(i+1);

    if((current+1) != next){
        res = String.fromCharCode(current+1);
        return `${res}`;
    }

  }

  return undefined;
};
