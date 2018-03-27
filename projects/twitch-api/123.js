var usernames = ["ESL_SC2", "freecodecamp", "test_channel"];
var usersAPI = `https://wind-bow.glitch.me/twitch-api/users/`;
var streamsAPI = `https://wind-bow.glitch.me/twitch-api/streams/`;
var channelsAPI = `https://wind-bow.glitch.me/twitch-api/channels/`;









//load users
function loadUsers(){
    for(var i = 0; i < usernames.length; i++){

        var username = usernames[i];
        var _userapi = usersAPI + username;
        var _streamsapi = streamsAPI + username;
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
            $('.streamers').append(each);
            get();
            // $.ajax({
            //     method: 'GET',
            //     url: _streamsapi,
            //     dataType: 'jsonp',
            //     header: {
            //         'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
            //     },
            //     success: (data) => {
            //         var res = JSON.stringify(data['stream']);
            //         var status = res['stream']['stream_type'];
            //         if(status = 'live'){
            //             $(`#${name}state`).toggleClass('online');
            //         } else {
            //             $(`#${name}state`).toggleClass('offline');
            //         }
                              
            //     }
            // })
            }//success
        });
    };
};

// var _streamsapi = streamsAPI + usernames[0] + `?=callback?`;
function get(){
    
    for(var i = 0; i < usernames.length; i++){
        var username = usernames[i];
        var _streamsapi = streamsAPI + username;

        $.ajax({
            method: 'GET',
            url: _streamsapi,
            dataType: 'jsonp',
            header: {
                'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
            }
        }).then((data) => {
                      
            if(data['stream'] == null){

                console.log(`offline`);
                // $(`#${name}state`).css({color: 'white'});
                // $(`#${name}status`).textContent = "fline"
                $(`${username}div`).innerHTML = `<i>offline</i>`;

            } else if(data['stream']['stream_type'] == 'live'){

                console.log(`online`);
                $(`#${name}state`).toggleClass('online');

            }

            
            
            
            
            
            
            
            // console.log(`\nDATA!!:\n${res}`);
        }).catch((e) => {
            console.log(``);
            
        });
    }
};

