var env = require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var input = process.argv[2];

function myConcert(userInput) {
if(input === "concert-this"){
    console.log("This is concert");
    var input = "Cher";
    url: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    }
};

var spotify = new Spotify(keys.spotify);

function myMusic(userInput){
    var song = userInput;

    if(song){
        console.log("This is a song");

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
    }
};

function myMovie(userInput){
    var movie = userInput;

    if(!movie){
       movie = "beauty and the beast"
    }

    var url = "http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    axios.get(url).then(function(response)){
        console.log("Movie " + response);
        console.log("Year released " + response);
        console.log("Rating " + response);
        console.log("Country filmed " + response);
        console.log("Language " + response);
        console.log("Plot " + response);
        console.log("Actors " + response);
    };
};

function myBoss(userInput){
if(input === "do-what-it-says"){
    console.log("Do it!");
    //will figure out what happens here
    }
};
