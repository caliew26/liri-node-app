var env = require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var input = process.argv[2];
if(process.argv[2]=== 'concert-this'){
    function myConcert(input) {
    var concert = userInput;

    if(!concert){
        concert = "New Kids on The Block";
        }
        // console.log("This is concert");
        
        var url = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";
        
};
};

var spotify = new Spotify(keys.spotify);

if(process.argv[2]==="spotify-this-song"){
    function myMusic(input){
        var song = userInput;

        if(!song){
            song = "Let It Go"
            // console.log("This is a song");
        };
            
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
}

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
    function myBoss(input){
    if(input === "do-what-it-says"){
        console.log("Do it!");
        //will figure out what happens here
        }
    };
};