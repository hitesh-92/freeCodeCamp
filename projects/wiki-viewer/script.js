document.getElementById('search-btn').addEventListener('click', getRes);

function getRes(e) {
    e.preventDefault();
    console.log("getting");

    let body = document.getElementById('search-bar').value;
    console.log(`\n${body}`);

    var uri = encodeURIComponent("https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=search&srsearch=dog&origin=*");
    console.log(uri);

    fetch('http://en.wikipedia.org//w/api.php?action=query&format=json&titles=batman&callback=?')
    .then((res) => res.json())
    .then((data) => {
        console.log(`DATA: \n${data}`);
        
    })
    .catch((e) => {console.log(e)
    });


    
    
    
    
}