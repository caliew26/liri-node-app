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

//declare node index 2 and 3 for input by the user
var input = process.argv[2];
    input2 = process.argv[3];
    input3 = process.argv[4];

//if statement to take input from user and run concert-this code
if(input === 'concert-this'){
    // function myConcert(input) {
    // declare a variable that will be a user input that is put into the api call
    var concertBand = input2;
    //if no band is given, then set a default band
    // if(!concertBand){
    //     concertBand = "New Kids on The Block";
    // }
    // console.log("This is concert");
    //declare the api url used to send to "bandsintown.com"
    var queryUrl = "https://rest.bandsintown.com/artists/" + concertBand + "/events?app_id=codingbootcamp";

    //axios will call the api to bandsintown.com
    axios.get(queryUrl).then(function(response){
        //using the response to get things back
        console.log(response);
        console.log("Date of concert " + response.datetime);
        console.log("Date tickets go on sale " + response.on_sale_datetime);
    })
    //create a concert.js file and populate responses 
    fs.writeFile("concert.js", "response", function(err){
        if (err){
            console.log("filewrite " + err);
        }
        console.log("concert.js was updated");
    });
    //read the concert.js file that was just generated
    fs.readFile("concert.js", "utf8", function(err,data){
        if (err){
            console.log("fileread " + err);
        }
        console.log(data);
        //create an array of the readfile and split with a comma
        var dataArr = data.split(",");

        console.log(dataArr);
    })
};


var spotify = new Spotify(keys.spotify);

//if statement to take input from user and run concert-this code
if(input === "spotify-this-song"){
// function myMusic(input){
    // declare a variable that will be a user input that is put into the api call
    var songName = input2;
    //if no songName is given, then set a default songName
    // if(!songName){
    //     songName = "let it go"
        // console.log("This is a song");
    // }
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
            console.log(response.tracks.items);
            console.log("name " + response.tracks.album.name);
            console.log("type " + response.tracks.artists.type);
            console.log("artist " + response.tracks.artists.name);
        };
    fs.writeFile("spotify.js", response.tracks.items, function(err){
        if (err){
            console.log("filewrite " + err);
        }
        console.log("spotify.js was updated");
    });
    fs.readFile("spotify.js", "utf8", function(err,data){
        if (err){
            console.log("fileread " + err);
        }
        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);
    })
    });
};

//if statement to take input from user and run concert-this code
if(input === "movie-this"){
    // function myMovie(userInput){
    var movieName = input2;
    //if no movieName is provided then have a default movie
    // if(!movieName){
    //     movieName = "beauty and the beast"
    // }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function(response){
        console.log("Movie " + response.data.Title);
        console.log("Year released " + response.data.Year);
        console.log("Rating " + response.data.Rating);
        console.log("Language " + response.data.Language);
        console.log("Plot " + response.data.Plot);
        console.log("Actors " + response.data.Actors);
    });
//create a movie.js file with the response back from the axios queryUrl api call
    fs.writeFile("movie.js", 'response' ,function(err){
        if (err){
            console.log("filewrite " + err);
        }
        console.log("movie.js was updated");
    });
    fs.readFile("movie.js", "utf8", function(err,data){
        if (err){
            console.log("fileread " + err);
        }
        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);
    })
};

//if statement to take input from user and run concert-this code
if(input === "do-what-it-says"){
        // console.log("Do it!");
        // };
    fs.readFile("random.txt", "utf8", function(error,data){
        if (error){
            console.log(error);
        }
        console.log(data);
    });
};