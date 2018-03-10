function findLongestWord(str) {
  //split string
  var eachStr = str.split(" ");

  //sort by length
  var sortedArray = eachStr.sort(function(a,b){return b.length - a.length});

  //longest word
  var ans = sortedArray[0];
  return ans.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
