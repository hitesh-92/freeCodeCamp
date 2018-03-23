var q = []; var a = [];
document.getElementById('button').addEventListener('click', loadQuote);
function loadQuote(){
  var xhr = new XMLHttpRequest(); q.shift();a.shift();
  xhr.open('GET', 'quotes.json', true);
  xhr.onload = function(){
    if(this.status == 200){

      var quotes = JSON.parse(this.responseText);
      var x = Math.floor(Math.random() * 5);
      // console.log(`\nx: ${x}`);// console.log(quotes[x].auth);

      var quote = ''; var auth = '';
      quote += `<h4>${quotes[x]['body']}</h4>`;
      q.push(quotes[x]['body']);
      auth += `<p>${quotes[x]['auth']}</p>`;
      a.push(quotes[x]['auth']);

      document.getElementById('quote').innerHTML = quote;
      document.getElementById('auth').innerHTML = auth;
    }

  }
  xhr.send();
  console.log(`\nq: ${q}\na: ${a}`);
}

document.getElementById('tweet').addEventListener('click', tweet);
function tweet(){
  var post = `${q} - ${a}`;
  console.log(`\n\n\nPOST: ${post}`);;
   window.open("https://twitter.com/intent/tweet?text=" + post)
}
