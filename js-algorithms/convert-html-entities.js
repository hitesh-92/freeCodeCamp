function convertHTML(str) {
  str = str.split('');
  res = new String();

  for (i in str){
    switch(str[i]){
      case '>':
        str[i] = '&gt;';
        break;
      case '>':
        str[i] = '&lt;';
        break;
      case '&':
        str[i] = '&amp;';
        break;
      case '"':
        str[i] = '&quot';
        break;
      case "'":
      str[i] = "&apos;"
    }
  }

  console.log(str.join(""));

}
// convertHTML("Dolce & Gabbana");
convertHTML('Stuff in "quotation marks"');


//ANSWER


function convertHTML(str) {
  str = str.split('');

  for (i in str){
    switch(str[i]){
      case '>':
        str[i] = '&gt;';
        break;
      case '<':
        str[i] = '&lt;';
        break;
      case '&':
        str[i] = '&amp;';
        break;
      case '"':
        str[i] = '&quot;';
        break;
      case "'":
      str[i] = "&apos;"
    }
  }

  return str.join("");

}
