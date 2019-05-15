var env = require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

// var input = process.argv[2];

var spotify = new Spotify(keys.spotify);

function myMusic(userInput){
    var song = userInput;

    if(!song){
        song = "let it go Celine Dion"
    }
        // console.log("This is a song");

    spotify.search({ 
            type: 'track', 
            query: song, 
            limit: 1,
        },
        function(err, response) {
            // console.log("this is a test");
            if(err){
            console.log("The error " + err)
        }else{
        console.log("Song name " + response.tracks.items[0].name);
        console.log("Artist " + response.tracks.artists[0].name);
        console.log("Album " + response.tracks.album[0].name);
        };
    });
};