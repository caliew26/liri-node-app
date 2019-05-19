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

//require the file "random.txt"
// const random = require("./random.txt");

var input1 = process.argv[2];
    input2 = process.argv[3];

//if statement to take input from user and run movie-this code
if(input1 === "concert-this"){
    var bandName = input2;
    if(!bandName){
        var bandName = "NKOTB";
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp&date=upcoming";

    axios.get(queryUrl).catch(function(error){
      console.log(error);
    })
    .then(function(response){
        var concert = response.data;
        for(var i = 0; i < concert.length; i++){
            console.log("----------------------------");
            console.log("artist: " + concert[i].Artist);    
            console.log("venue name: " + concert[i].venue.name);
            console.log("venue city: " + concert[i].venue.city);
            console.log("date: " + concert[i].datetime)
            console.log("----------------------------");
        }
    })
};

//if statement to take input from user and run movie-this code
if(input1 === "movie-this"){
    // function myMovie(userInput){
    var movieName = input2;
    //if no movieName is provided then have a default movie
    if(!movieName){
        var movieName = "beauty and the beast";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).catch(function(error){
        if(error){
            console.log(error);
        }
    })
    .then(function(response){
        var movies = [
            "----------------------------",
            "Movie " + response.data.Title,
            "Year released " + response.data.Year,
            "Rating " + response.data.tomatoRating,
            "Language " + response.data.Language,
            "Plot " + response.data.Plot,
            "Actors " + response.data.Actors,
            "----------------------------"
        ].join("\n\n");

        fs.appendFile("log.txt", movies, function(err) {
            if (err) throw err;
            console.log(movies);
        })
    })
};

var spotify = new Spotify(keys.spotify);

if(input1 === "spotify-this-song"){
    songName = input2;

    if(!songName){
        var songName = "Believe";
    }

    spotify.search({ 
        type: 'track', 
        query: songName,
        limit: 5
        }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
        }

        var songs = data.tracks.items;
        for(var i = 0; i < songs.length; i++){
            console.log("----------------------------");
            console.log("Song by: " + songs[i].album.artists.name);
            console.log("Song title: " + songs[i].name);
            console.log("Song is on album titled: " + songs[i].album.name);
            console.log("----------------------------");
        }
    });
}

// if statement to take input from user and run do-what-it-says code
if(input1 === "do-what-it-says"){
    console.log("Do it!");

    fs.readFile("random.txt", "utf8", function(error,data){
        if (error){
            console.log(error);
        }
        console.log(data);
    });
};