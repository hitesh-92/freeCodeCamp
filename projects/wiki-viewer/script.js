$('body').hide(); $('body').fadeIn(500);

// var api ="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=";
var url ="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=";

// var searchValue = document.getElementById('search-bar').value;

$('document').ready(function() {

    $('#form').on('submit', function(e){
        e.preventDefault();

        var searchValue = $('#search-bar').val();
        var api = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchValue}`;
        // console.log(api);

        

        var searchResults;

        $.ajax({
            'method': 'GET',
            'async': false,
            'url': api,
            'dataType': 'json',
            'success': (data) => { searchResults = data['query']['search'] }
        });
        
        // console.log(searchResults);

        $('ul#search-results').empty();


        for(var i = 0; i < searchResults.length; i++){
            var title = searchResults[i].title;
            var snippet = searchResults[i].snippet;
            var href = `https://en.wikipedia.org/wiki/${searchResults[i].title}`;

            var each = `<div class="each"> <a href="${href}">${title}</a> <br> <p class="snippet">${snippet}</p> <div><br>`;

            $('#search-results').append(each);            
        };

    });//form



});