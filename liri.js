var env = require("dotenv").config();

var keys = require("./keys.js");

// concert-this

// spotify-this-song

// movie-this

// do-what-it-says

var Spotify = require('node-spotify-api');


var spotify = new Spotify(keys.spotify);

var input = process.argv[2];

if(input === "concert-this"){
    console.log("This is concert");
}

spotify
    .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function(data) {
    console.log(data); 
    })
    .catch(function(err) {
    console.error('Error occurred: ' + err); 
});
  
spotify
    .search({ type: 'album', query: 'A New Day', limit: 1})
    .then(function(response) {
    console.log(response);
    })
    .catch(function(err) {
    console.log(err);
});