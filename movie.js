var env = require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var input = process.argv[2];

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
