var usernames = ["ESL_SC2", "freecodecamp", "test_channel"];
var usersAPI = `https://wind-bow.glitch.me/twitch-api/users/`;
var streamsAPI = `https://wind-bow.glitch.me/twitch-api/streams/`;


var loadUsers = () => {
for(var i = 0; i < usernames.length; i++){
var username = usernames[i];var _userapi = usersAPI + username;

$.ajax({method: 'GET',url: _userapi,dataType: 'jsonp'})
.then((data) => {var displayName =  data['display_name'];var name = data['name'];var logo = data['logo'];var each = `<div class="userDiv" id="${name}div"> <img src="${logo}">  <a class="displayName" href="${name}">${displayName}</a>  <p class="status" id="${name}status">status:</p>  </div><br>`
$('.streamers').append(each);})
.catch((e) => {console.log(e)});
}
};


var updateStatus = () => {
    for(var i = 0; i < usernames.length; i++){
        var username = usernames[i];
        var _streamsapi = streamsAPI + username;
        
        $.ajax({
            method: 'GET',
            url: _streamsapi,
            dataType: 'jsonp',
            // success: (data) => {return data}
        }).done((data) => {

            // console.log(`${username}\n${data}`);
            // console.log(data['stream']);
            var status = data['stream'];            console.log(`\n${status}`);
            // if(!status == null){
            //     console.log(`${username}: online`);
            // }
            
            
            
            
            
            
        });
    }//for
};


var user = streamsAPI + usernames[0];
var stream = streamsAPI + usernames[0];

function get(){
    $.getJSON(url)
    .then(function(data) {
        return $.getJSON(data.url);
    })
    .then(function(dataFromSecondCall) {
       return $.getJSON(dataFromSecondCall.url);
    })
    .then(function(finalData) {
       $("#some-div").html(finalData);
    })
    .catch(function(error) {
        //explode
    });
}





$('document').ready(() =>{
    loadUsers();
    // updateStatus(); 
})


logo:"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg"
name:"ESL_SC2"
online:true
streaming:"StarCraft II"
url:"https://api.twitch.tv/kraken/users/esl_sc2"
userExist:true
__proto__:Object


`<div class="userDiv" id="${name}div">
 <img src="${logo}"> 
  <a class="displayName" href="${name}">${displayName}</a>
    <p class="status" id="${name}status">status:</p> 
     </div><br>`
