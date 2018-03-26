// giphy api, api.giphy.com

//parameters for api, parameters are name value pairs that get strung together
//q is the search query term or phrase 


//javascript, jQuery



function getData() {

var input = $('#searchtext').val();
var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" +input+ "&api_key=rIQtqBsnwS9APOr97WLCDTut7pW8ETYu&limit=10");
xhr.done(function(response) { console.log("success got data", response);

let jiffs = response.data 

for (i in jiffs){
    $('.inner').append("<img src= '" +jiffs[i].images.original.url + "' style='height:350px; width:350px; '/>");

    }

});
}
