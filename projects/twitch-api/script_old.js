// https://wind-bow.glitch.me/twitch-api/users/freecodecamp
// https://wind-bow.glitch.me/twitch-api/streams/freecodecamp
// https://wind-bow.glitch.me/twitch-api/channels/freecodecamp



// var usernames = ["ESL_SC2", "freecodecamp", "test_channel"];
// var api = `https://wind-bow.gomix.me/twitch-api`;



// function loadStreamers(){
//     $.ajax({
//         method: 'GET',
//         url: ``
//     })


//     for(var i = 0; i < usernames.length; i++){
//         var name = usernames[i];
//         var href = `https://www.twitch.tv/${name}`;

//         var userData;
//         $.ajax({
//             method: 'GET',
//             url: `https://wind-bow.gomix.me/twitch-api/${name}`;

//         })

        
//         var userDiv = `
//                     <div class="userDiv"><p>p y p</p><span><a href="${href}">${name}</a></span></div><br>`;
//         $('.streamers').append(userDiv)
//     }
// };




// $('document').ready(function(){
//     getAPI();
//     loadStreamers();
// });
// var type = 'users'; var name = 'freecodecamp'
// var api = `https://wind-bow.gomix.me/twitch-api/freecodecamp`;
// var x =  'https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?';
// var uu = 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
// var pp = `https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?`;
// var may = `https://wind-bow.glitch.me/twitch-api/users/freecodecamp`;

// var xhr = new XMLHttpRequest();
// xhr.open('GET', x, true);
// xhr.onload = function(){
//     if(this.status == 200){
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//         $('#delete').empty();$('#delete').detach();
//         $('.streamers').append(data)
//     }
// };
// xhr.send();

// var results;
// $.ajax({
//     mehtod: 'GET',
//     url: may,
//     headers: {
//         'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
//     },
//     success: function(data) {
//         console.log(data);
              
//     }
// });
// console.log(`\nRES\n`+results);

// var omg = `https://wind-bow.glitch.me/twitch-api/users/freecodecamp`;
// var results;
// $.ajax({
//     mehtod: 'GET',
//     url: omg,
//     dataType: "jsonp",
//     headers: {
//         'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
//     },
//     success: function(data) {
//         console.log(data);
              
//     }
// });


