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
    // input3 = process.argv[3] + process.argv[4];

if(input1 === "concert-this"){
    var bandName = input2;
    // // if(bandName === ""){
        // var bandName = "NKOTB";
    // // }

    var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp&date=upcoming";

    axios.get(queryUrl).catch(function(error){
      console.log(error);
    })
    .then(function(response){
        for(var i = 0; i < response.data.length; i++){
        console.log("----------------------------");
        console.log("artist: " + input2);    
        console.log("venue name: " + response.data[i].venue.name);
        console.log("venue city: " + response.data[i].venue.city);
        console.log("date: " + response.data[i].datetime)
        console.log("----------------------------");
           
        }
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
    songName = input2,

    spotify.search({ 
        type: 'track', 
        query: input2,
        limit: 5
        }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
        //create a spotify.js file and import all data.tracks.items values
        // fs.writeFile("spotify.js", data.tracks.items[0,1,2,3,4], function(err){
        //     if (err){
        //         console.log("filewrite " + err);
        //     }
        //     console.log("spotify.js was updated");
        // });
        // console.log(data.tracks.items);

        console.log("Song by: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song title: " + data.tracks.items[0].name);
        console.log("Song is on album titled: " + data.tracks.items[0].album.name)
        // console.log(data.tracks.items.album.preview_url);
        // console.log(data.tracks.items[0].album.preview_url);
        // console.log(data.tracks.items[2].album.preview_url);
    });
}

//if statement to take input from user and run concert-this code
if(input1 === "do-what-it-says"){
    console.log("Do it!");
    fs.readFile("random.txt", "utf8", function(error,data){
        if (error){
            console.log(error);
        }
        console.log(data);
    });
}