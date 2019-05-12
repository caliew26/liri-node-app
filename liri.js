// require(".env").config();

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// concert-this

// spotify-this-song

// movie-this

// do-what-it-says

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "0a9962848eeb4ab081315857f6efaa41",
  secret: "47babb54a6c6498aba817f6929e90839",
});
 
// search({ type: 'billy joel', query: 'Piano Man', limit: 1 });

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 

// console.log(data); 
// });