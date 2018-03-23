var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=52.652&lon=-1.112' , true);

xhr.onload = function(){
  if(this.status == 200){
    var res = JSON.parse(this.responseText);
    document.getElementById('weather').textContent = res['weather']['0']['description'];
    document.getElementById('temp').textContent = `${res['main']['temp']}°C`;
  }
}

xhr.send();

document.getElementById('button').addEventListener('click', tempF);
// °C  x  9/5 + 32 = °F
function tempF () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=52.652&lon=-1.112' , true);
    xhr.onload = function(){
      if(this.status == 200){
        var res = JSON.parse(this.responseText);
        console.log(`\nFROM tempF| res: ${res['main']['temp']}`);
        var x = res['main']['temp'];
        var xF = (x * 9/5) + 32;
        document.getElementById('temp').innerHTML = `${xF}°F`;

      }
    }
    xhr.send();
}
