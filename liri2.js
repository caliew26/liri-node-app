//require dotenv npm package
const env = require("dotenv").config();

//require connection to keys.js file
const keys = require("./keys.js");

//require spotify npm package
const Spotify = require('node-spotify-api');

//require axios npm package
const axios = require("axios");

//require fs npm package
const fs = require("fs");

var input1 = process.argv[2];
    input2 = process.argv[3];
    input3 = process.argv[4];

if(input1 === "concert-this"){
    bandName = input2;

    var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(function(error,data){
        if (error){
            console.log(error);
        }
        console.log(data.artist_id);
    });
};

if(input1 === "movie-this"){
    movieName = input2;

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function(response){
        console.log("Movie " + response.data.Title);
        console.log("Year released " + response.data.Year);
        console.log("Rating " + response.data.Rating);
        console.log("Language " + response.data.Language);
        console.log("Plot " + response.data.Plot);
        console.log("Actors " + response.data.Actors);
    });
}

var spotify = new Spotify(keys.spotify);

if(input1 === "spotify-this-song"){
    songName = input2;

    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        console.log(data);
    });
}