var usernames = ["ESL_SC2", "freecodecamp", "test_channel"];
var usersAPI = `https://wind-bow.glitch.me/twitch-api/users/`;
var streamsAPI = `https://wind-bow.glitch.me/twitch-api/streams/`;
var channelsAPI = `https://wind-bow.glitch.me/twitch-api/channels/`;

function loadUsers(){
    for(var i = 0; i < usernames.length; i++){

        var username = usernames[i];
        var _userapi = usersAPI + username;
        var req;

        $.ajax({
            method: 'GET',
            url: _userapi,
            dataType: 'jsonp',
            headers: {
                'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
            },
            success: (data) => {
                
            var displayName =  data['display_name'];
            var name = data['name'];
            var logo = data['logo'];
                
            var each = `<div class="userDiv"> <img src="${logo}">  <a class="displayName" href="${name}">${displayName}</a>  <p class="status">offline</p>  </div><br>`

            $('.streamers').append(each);
                            
        }
    });
}

    
        
};//for

var userData = [];

function userStatus(){
    for(var i = 0; i < usernames.length; i++){
        var _streamsAPI = streamsAPI + usernames[i] + `?callback=?`;
        var userData;
        
        $.ajax({
            method: 'GET',
            // async: false,
            url: _streamsAPI,
            dataType: 'jsonp',
            headers: {
                'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
            },
            success: (data) => { console.log(`\n---\n ${data} \n---\n`);
             }
            
        })
    }

        
}


var testing = [];
$('document').ready(function() {
    // userStatus();
    



    // $('body').hide();
    // $('body').fadeIn(1000);
    loadUsers();

    // setTimeout(function(){
    // for(var i = 0; i < usernames.length; i++){
    //     var status = userData[0]['stream'];
    
    //     testing.push(status);
        
        
    // }},5000);



    
});


function status(url){        
        $.ajax({
            method: 'GET',
            // async: false,
            url: streamsAPI + usernames[0],
            dataType: 'jsonp',
            headers: {
                'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
            },
            success: (data) => { console.log(`\n---\n ${data} \n---\n`);
        }
            
    })
}
status();
