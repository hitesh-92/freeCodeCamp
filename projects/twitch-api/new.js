var users = ["ESL_SC2", "freecodecamp", "test_channel"];

function displayUsers(){
    users.forEach(loadUsers);
}

var loadUsers = (name) => {
    "use strict";
    let userInfo = {};
    user(name, userInfo)
      .then(() => { return logo(name,userInfo)})
      .then(() => { return stream(name,userInfo)})
      .then(() => { return buildUser(name,userInfo)})
      .catch((e) => {console.log(e)});

    // console.log(userInfo);
}

var user = (name, userInfo) => {
    return $.get(`https://wind-bow.glitch.me/twitch-api/users/${name}`, (data) => {
        if(data.message){
            userInfo.userExist = false;
            userInfo.title = data.message;
        } else {
            userInfo.userExist = true;
        }
    });
};

var logo = (name, userInfo) => {
    if(userInfo.userExist === true){
        return $.get(`https://wind-bow.glitch.me/twitch-api/users/${name}`, (data) => {
            userInfo.name = data.display_name;
            userInfo.url = data._links.self;
            userInfo.logo = data.logo;
        });
    }
};

var stream = (name, userInfo) => {
    return $.get(`https://wind-bow.glitch.me/twitch-api/streams/${name}`, (data) => {
        if(data.stream == null){
            userInfo.online = false
        } else {
            userInfo.online = true;
            userInfo.streaming = data.stream.game;
        }
    });
};

var buildUser = (name, userInfo) => {
    var html = '';
    if(userInfo.userExist === true && userInfo.online === true){
        html += '<div class="userDiv online">';
    } else if ((userInfo.userExist === true && userInfo.online === false)) {
        html += '<div class="userDiv offline">';
    }
    html += `<img src="${userInfo.logo}"><a class="usernames" href="${userInfo.url}">${userInfo.name}</a>`;
    if(userInfo.online === true){
        html += `<p class=""statusOnline> ${userInfo.streaming} </p>`;
    } else if (userInfo.online === false){
        html += `<p class="statusOffline"><i>Offline</i></p>`
    }

    $('.streamers').append(html);

    // console.log("HTML:\n"+html);

};


$('document').ready(() => {
    displayUsers();
});