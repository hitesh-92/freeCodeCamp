var usernames = ["ESL_SC2", "freecodecamp", "test_channel"];
var usersAPI = `https://wind-bow.glitch.me/twitch-api/users/`;
var streamsAPI = `https://wind-bow.glitch.me/twitch-api/streams/`;
var channelsAPI = `https://wind-bow.glitch.me/twitch-api/channels/`;


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
    
};//for