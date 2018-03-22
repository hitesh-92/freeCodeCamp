$(document).ready(function() {

    $("#btn").on("click", function(){
      // $(".message").html("Here is the message");
      $.getJSON("./quotes.json", function(json){

        var html = "";
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class='data'>";
          keys.forEach(function(key){
            html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
          });
          html += "</div><br>"
        });
      })
    });
});
