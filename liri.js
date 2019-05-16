var env = require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var fs = require("fs");

var input = process.argv[2];

if(process.argv[2]=== 'concert-this'){
    // function myConcert(input) {
    var concertBand = "";

    if(!concertBand){
        concertBand = "New Kids on The Block";
        }
        // console.log("This is concert");
        
        var queryUrl = "https://rest.bandsintown.com/artists/" + concertBand + "/events?app_id=codingbootcamp";

        axios.get(queryUrl).then(function(response){
            console.log("Date of concert " + response.datetime);
            console.log("Date tickets go on sale " + response.on_sale_datetime);
        })
};


var spotify = new Spotify(keys.spotify);

if(process.argv[2]==="spotify-this-song"){
    // function myMusic(input){
        var songName = "";

        if(!songName){
            songName = "Let It Go"
            // console.log("This is a song");
        };
            
        spotify.search({ 
                type: 'track', 
                query: songName, 
                limit: 3,
            },
            function(err, response) {
                // console.log("this is a test");
                if(err){
                console.log("The error " + err)
            }else{
                console.log("response " + response);
                console.log("name " + response.tracks.album.name);
                console.log("type " + response.tracks.artists.type);
                console.log("artist " + response.tracks.artists.name);
                // console.log("Song name " + response.tracks.item);
                // console.log("Artist " + response.tracks.album.artists[0]);
                // console.log("Album " + response.tracks.album.name);
            };
        });
    };

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
// };

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