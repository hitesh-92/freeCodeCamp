function titleCase(str) {
	//split to words
     words = str.toLowerCase().split(' ');

     for(var i = 0; i < words.length; i++) {

          var letters = words[i].split('');

          //uppecase first letter of each word
          letters[0] = letters[0].toUpperCase();

          //join
          words[i] = letters.join('');
     }

     var x = words.join(' ');
     return x;
}
titleCase("I'm a little tea pot");
