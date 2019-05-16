//require dotenv npm package
var env = require("dotenv").config();

//require connection to keys.js file
var keys = require("./keys.js");

//require spotify npm package
var Spotify = require('node-spotify-api');

//require axios npm package
var axios = require("axios");

//require fs npm package
var fs = require("fs");

//declare node index 2
var input = process.argv[2];

//if statement to take input from user and run concert-this code
if(process.argv[2]=== 'concert-this'){
    // function myConcert(input) {
    // declare a variable that will be a user input that is put into the api call
    var concertBand = "";
    //if no band is given, then set a default band
    if(!concertBand){
        concertBand = "New Kids on The Block";
    }
    // console.log("This is concert");
    //declare the api url used to send to "bandsintown.com"
    var queryUrl = "https://rest.bandsintown.com/artists/" + concertBand + "/events?app_id=codingbootcamp";

    //axios will call the api call to bandsintown.com
    axios.get(queryUrl).then(function(response){
        //using the response to get things back
        console.log("Date of concert " + response.datetime);
        console.log("Date tickets go on sale " + response.on_sale_datetime);
    })
};


var spotify = new Spotify(keys.spotify);

//if statement to take input from user and run concert-this code
if(process.argv[2]==="spotify-this-song"){
// function myMusic(input){
    // declare a variable that will be a user input that is put into the api call
    var songName = "";
    //if no songName is given, then set a default songName
    if(!songName){
        songName = "Let It Go"
        // console.log("This is a song");
    }
    //spotify api requirements, a track and a songName and number of responses rec'd back
    spotify.search({ 
        type: 'track', 
        query: songName, 
        limit: 3,
    },//capture error
        function(err, response) {
            // console.log("this is a test");
            if(err){
            console.log("The error " + err)
        }else{
            //using the response to get things back
            console.log("response " + response);
            console.log("name " + response.tracks.album.name);
            console.log("type " + response.tracks.artists.type);
            console.log("artist " + response.tracks.artists.name);
        };
    });
};

//if statement to take input from user and run concert-this code
if(process.argv[2]==="movie-this"){
    // function myMovie(userInput){
    var movieName = "";

    if(!movieName){
    movieName = "beauty and the beast"
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function(response){
        console.log("Movie " + response.data.Title);
        console.log("Year released " + response.data.Year);
        console.log("Rating " + response.data.Rating);
        console.log("Language " + response.data.Language);
        console.log("Plot " + response.data.Plot);
        console.log("Actors " + response.data.Actors);
    });
};

//if statement to take input from user and run concert-this code
if(process.argv[2]==="do-what-it-says"){
    // function myBoss(input){
    if(input === "do-what-it-says"){
        console.log("Do it!");
        };
    fs.readFile("random.txt", "utf8", function(error,data){
        if (error){
            console.log(error);
        }
    console.log(data);
    })
};