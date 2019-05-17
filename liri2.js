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



Calis-MacBook-Pro:liri-node-app calimitchell$ node liri.js concert-this nkotb
{ status: 200,
  statusText: 'OK',
  headers:
   { 'content-type': 'application/json',
     'content-length': '30371',
     connection: 'close',
     date: 'Fri, 17 May 2019 16:54:44 GMT',
     'x-amzn-requestid': '7892f267-78c4-11e9-9a12-593131812cc3',
     'access-control-allow-origin': '*',
     'x-amz-apigw-id': 'Z1kVLFpeoAMFd6Q=',
     'x-amzn-trace-id': 'Root=1-5cdee754-43558650fbe58ea94a57b717;Sampled=0',
     'x-cache': 'Miss from cloudfront',
     via:
      '1.1 fc1009b8e45427207e2a571827e9dd24.cloudfront.net (CloudFront)',
     'x-amz-cf-id': '8gU1TQQzNhRyam4TSFMQDY_FX4cYJXTBiLsG54SaEOBlvFRhvBkqvQ==' },
  config:
   { adapter: [Function: httpAdapter],
     transformRequest: { '0': [Function: transformRequest] },
     transformResponse: { '0': [Function: transformResponse] },
     timeout: 0,
     xsrfCookieName: 'XSRF-TOKEN',
     xsrfHeaderName: 'X-XSRF-TOKEN',
     maxContentLength: -1,
     validateStatus: [Function: validateStatus],
     headers:
      { Accept: 'application/json, text/plain, */*',
        'User-Agent': 'axios/0.18.0' },
     method: 'get',
     url:
      'https://rest.bandsintown.com/artists/nkotb/events?app_id=codingbootcamp',
     data: undefined },
  request:
   ClientRequest {
     _events:
      [Object: null prototype] {
        socket: [Function],
        abort: [Function],
        aborted: [Function],
        error: [Function],
        timeout: [Function],
        prefinish: [Function: requestOnPrefinish] },
     _eventsCount: 6,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: true,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: false,
     sendDate: false,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: 0,
     _hasBody: true,
     _trailer: '',
     finished: true,
     _headerSent: true,
     socket:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'rest.bandsintown.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 8,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'rest.bandsintown.com',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 6,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     connection:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'rest.bandsintown.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 8,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'rest.bandsintown.com',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 6,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     _header:
      'GET /artists/nkotb/events?app_id=codingbootcamp HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: axios/0.18.0\r\nHost: rest.bandsintown.com\r\nConnection: close\r\n\r\n',
     _onPendingData: [Function: noopPendingOutput],
     agent:
      Agent {
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        defaultPort: 443,
        protocol: 'https:',
        options: [Object],
        requests: {},
        sockets: [Object],
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100,
        _sessionCache: [Object] },
     socketPath: undefined,
     timeout: undefined,
     method: 'GET',
     path: '/artists/nkotb/events?app_id=codingbootcamp',
     _ended: true,
     res:
      IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        socket: [TLSSocket],
        connection: [TLSSocket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 200,
        statusMessage: 'OK',
        client: [TLSSocket],
        _consuming: true,
        _dumped: false,
        req: [Circular],
        responseUrl:
         'https://rest.bandsintown.com/artists/nkotb/events?app_id=codingbootcamp',
        redirects: [] },
     aborted: undefined,
     timeoutCb: null,
     upgradeOrConnect: false,
     parser: null,
     maxHeadersCount: null,
     _redirectable:
      Writable {
        _writableState: [WritableState],
        writable: true,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _options: [Object],
        _ended: true,
        _ending: true,
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 0,
        _requestBodyBuffers: [],
        _onNativeResponse: [Function],
        _currentRequest: [Circular],
        _currentUrl:
         'https://rest.bandsintown.com/artists/nkotb/events?app_id=codingbootcamp' },
     [Symbol(isCorked)]: false,
     [Symbol(outHeadersKey)]:
      [Object: null prototype] { accept: [Array], 'user-agent': [Array], host: [Array] } },
  data:
   [ { offers: [Array],
       venue: [Object],
       datetime: '2019-05-16T19:00:16',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404580',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404580?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-17T19:00:06',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404583',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404583?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-18T19:00:50',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404586',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404586?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-21T19:00:29',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404594',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404594?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-22T19:00:57',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404597',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404597?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-23T19:00:29',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404603',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404603?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-24T19:00:03',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404605',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404605?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-25T19:00:48',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404608',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404608?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-26T19:00:32',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404664',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404664?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-28T19:00:44',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404667',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404667?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-29T19:00:25',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404674',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404674?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-05-30T19:00:20',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404679',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404679?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-01T19:00:56',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404682',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404682?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-02T19:00:44',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404690',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404690?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-04T19:00:32',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404715',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404715?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-06T19:00:13',
       on_sale_datetime: '',
       description: '',
       lineup: [Array],
       id: '100404743',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/100404743?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-07T20:00:00',
       on_sale_datetime: '2018-10-09T18:55:00',
       description: '',
       lineup: [Array],
       id: '1012079667',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079667?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-08T20:00:00',
       on_sale_datetime: '2018-10-12T15:00:00',
       description: '',
       lineup: [Array],
       id: '1012078545',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078545?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-09T19:30:00',
       on_sale_datetime: '2018-10-12T15:00:00',
       description: '',
       lineup: [Array],
       id: '1012078644',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078644?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-11T19:30:00',
       on_sale_datetime: '2018-10-12T15:00:00',
       description: '',
       lineup: [Array],
       id: '1012079641',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079641?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-12T19:30:00',
       on_sale_datetime: '2018-10-12T15:00:00',
       description: '',
       lineup: [Array],
       id: '1012079638',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079638?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-13T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078858',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078858?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-14T20:01:00',
       on_sale_datetime: '2018-10-10T17:19:00',
       description: '',
       lineup: [Array],
       id: '1012078707',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078707?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-15T20:00:00',
       on_sale_datetime: '2018-10-19T15:00:00',
       description: '',
       lineup: [Array],
       id: '1012168070',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012168070?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-18T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078637',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078637?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-19T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078646',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078646?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-21T20:00:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078879',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078879?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-22T20:00:00',
       on_sale_datetime: '2018-10-12T16:00:00',
       description: '',
       lineup: [Array],
       id: '1012079629',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079629?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-23T19:30:00',
       on_sale_datetime: '2018-10-12T16:00:00',
       description: '',
       lineup: [Array],
       id: '1012079708',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079708?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-25T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078717',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078717?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-27T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012079627',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079627?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-28T20:00:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078871',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078871?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-29T19:30:00',
       on_sale_datetime: '2018-10-09T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012122507',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012122507?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-06-30T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078670',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078670?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-02T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description:
        'To purchase advance parking for this event, please click here: https://prucenter.clickandpark.com/',
       lineup: [Array],
       id: '1012079616',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079616?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-03T19:30:00',
       on_sale_datetime: '2018-10-09T17:41:00',
       description: '',
       lineup: [Array],
       id: '1012079566',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079566?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-05T20:00:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012079707',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079707?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-06T19:30:00',
       on_sale_datetime: '2018-10-10T16:52:00',
       description:
        'Patrons 2yrs and older require a ticket. Artist(s) subject to change. Due to security enhancements, please arrive at least 45-60 minutes prior to event time. Please only bring essential items with you. Hersheypark Stadium will only permit bags/backpacks that are 12"x12"x6" or smaller and clear 1-gallon bags. Any bags/backpacks that are larger in size will need to be returned to the owners vehicle or disposed of. No audio/video recording. Rain Or Shine Tickets can be purchased online up to 1 hour prior to event start time. After this time, if tickets are still available, they can be purchased at the Hersheypark Stadium Box Office',
       lineup: [Array],
       id: '1012078874',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078874?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-07T19:30:00',
       on_sale_datetime: '2018-10-10T17:23:00',
       description: '',
       lineup: [Array],
       id: '1012079686',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079686?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-09T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078575',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078575?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-10T19:30:00',
       on_sale_datetime: '2018-10-09T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012078573',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078573?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-11T19:30:00',
       on_sale_datetime: '2018-10-12T14:00:00',
       description: '',
       lineup: [Array],
       id: '1012079623',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079623?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-12T20:00:00',
       on_sale_datetime: '2018-10-10T17:26:00',
       description: '',
       lineup: [Array],
       id: '1012078796',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012078796?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-13T20:01:00',
       on_sale_datetime: '2018-10-09T19:09:00',
       description: '',
       lineup: [Array],
       id: '1012079625',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079625?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
     { offers: [Array],
       venue: [Object],
       datetime: '2019-07-14T19:00:00',
       on_sale_datetime: '2018-10-10T17:13:00',
       description:
        'A $6.00 per ticket Traffic Control Fee will be included in the listed Service Fee upon payment for this event. This fee will include access to general parking at BB&T Center for the date of the event for which the ticket was purchased. Simply show your ticket at the parking gates to be scanned upon entry. This policy is in effect for tickets purchased at full price via Ticketmaster and for tickets purchased at full price at the BB&T Center box office prior to day of event. This policy is limited to specified events and may not apply to promotional ticket offers. **Traffic Control Fee is not included in Platinum and VIP Tickets**',
       lineup: [Array],
       id: '1012079652',
       artist_id: '1075',
       url:
        'https://www.bandsintown.com/e/1012079652?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' } ] }



{ status: 200,
    statusText: 'OK',
    headers:
        { 'content-type': 'application/json',
        'content-length': '29736',
        connection: 'close',
        date: 'Fri, 17 May 2019 17:36:15 GMT',
        'x-amzn-requestid': '45332fc6-78ca-11e9-8bf7-a957e4cb3fda',
        'access-control-allow-origin': '*',
        'x-amz-apigw-id': 'Z1qaXE6OoAMF7UQ=',
        'x-amzn-trace-id': 'Root=1-5cdef10f-8261e7847b263cee79db7790;Sampled=0',
        'x-cache': 'Miss from cloudfront',
        via:
        '1.1 812defed1167ca00304e9ce555dcf6e3.cloudfront.net (CloudFront)',
        'x-amz-cf-id': 'QlQJjduUG4zw9LhXKX6iFnsBF7zVuqC2uL6v6MEqs4r83Cs5BhfwgA==' },
    config:
        { adapter: [Function: httpAdapter],
        transformRequest: { '0': [Function: transformRequest] },
        transformResponse: { '0': [Function: transformResponse] },
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        validateStatus: [Function: validateStatus],
        headers:
        { Accept: 'application/json, text/plain, */*',
            'User-Agent': 'axios/0.18.0' },
        method: 'get',
        url:
        'https://rest.bandsintown.com/artists/nkotb/events?app_id=codingbootcamp',
        data: undefined },
    request:
        ClientRequest {
        _events:
        [Object: null prototype] {
            socket: [Function],
            abort: [Function],
            aborted: [Function],
            error: [Function],
            timeout: [Function],
            prefinish: [Function: requestOnPrefinish] },
        _eventsCount: 6,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: false,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: 0,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket:
        TLSSocket {
            _tlsOptions: [Object],
            _secureEstablished: true,
            _securePending: false,
            _newSessionPending: false,
            _controlReleased: true,
            _SNICallback: null,
            servername: 'rest.bandsintown.com',
            alpnProtocol: false,
            authorized: true,
            authorizationError: null,
            encrypted: true,
            _events: [Object],
            _eventsCount: 8,
            connecting: false,
            _hadError: false,
            _handle: [TLSWrap],
            _parent: null,
            _host: 'rest.bandsintown.com',
            _readableState: [ReadableState],
            readable: true,
            _maxListeners: undefined,
            _writableState: [WritableState],
            writable: false,
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: undefined,
            _server: null,
            ssl: [TLSWrap],
            _requestCert: true,
            _rejectUnauthorized: true,
            parser: null,
            _httpMessage: [Circular],
            [Symbol(res)]: [TLSWrap],
            [Symbol(asyncId)]: 6,
            [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]: null,
            [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0,
            [Symbol(connect-options)]: [Object] },
        connection:
        TLSSocket {
            _tlsOptions: [Object],
            _secureEstablished: true,
            _securePending: false,
            _newSessionPending: false,
            _controlReleased: true,
            _SNICallback: null,
            servername: 'rest.bandsintown.com',
            alpnProtocol: false,
            authorized: true,
            authorizationError: null,
            encrypted: true,
            _events: [Object],
            _eventsCount: 8,
            connecting: false,
            _hadError: false,
            _handle: [TLSWrap],
            _parent: null,
            _host: 'rest.bandsintown.com',
            _readableState: [ReadableState],
            readable: true,
            _maxListeners: undefined,
            _writableState: [WritableState],
            writable: false,
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: undefined,
            _server: null,
            ssl: [TLSWrap],
            _requestCert: true,
            _rejectUnauthorized: true,
            parser: null,
            _httpMessage: [Circular],
            [Symbol(res)]: [TLSWrap],
            [Symbol(asyncId)]: 6,
            [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]: null,
            [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0,
            [Symbol(connect-options)]: [Object] },
        _header:
        'GET /artists/nkotb/events?app_id=codingbootcamp HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: axios/0.18.0\r\nHost: rest.bandsintown.com\r\nConnection: close\r\n\r\n',
        _onPendingData: [Function: noopPendingOutput],
        agent:
        Agent {
            _events: [Object],
            _eventsCount: 1,
            _maxListeners: undefined,
            defaultPort: 443,
            protocol: 'https:',
            options: [Object],
            requests: {},
            sockets: [Object],
            freeSockets: {},
            keepAliveMsecs: 1000,
            keepAlive: false,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            maxCachedSessions: 100,
            _sessionCache: [Object] },
        socketPath: undefined,
        timeout: undefined,
        method: 'GET',
        path: '/artists/nkotb/events?app_id=codingbootcamp',
        _ended: true,
        res:
        IncomingMessage {
            _readableState: [ReadableState],
            readable: false,
            _events: [Object],
            _eventsCount: 3,
            _maxListeners: undefined,
            socket: [TLSSocket],
            connection: [TLSSocket],
            httpVersionMajor: 1,
            httpVersionMinor: 1,
            httpVersion: '1.1',
            complete: true,
            headers: [Object],
            rawHeaders: [Array],
            trailers: {},
            rawTrailers: [],
            aborted: false,
            upgrade: false,
            url: '',
            method: null,
            statusCode: 200,
            statusMessage: 'OK',
            client: [TLSSocket],
            _consuming: true,
            _dumped: false,
            req: [Circular],
            responseUrl:
            'https://rest.bandsintown.com/artists/nkotb/events?app_id=codingbootcamp',
            redirects: [] },
        aborted: undefined,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        _redirectable:
        Writable {
            _writableState: [WritableState],
            writable: true,
            _events: [Object],
            _eventsCount: 2,
            _maxListeners: undefined,
            _options: [Object],
            _ended: true,
            _ending: true,
            _redirectCount: 0,
            _redirects: [],
            _requestBodyLength: 0,
            _requestBodyBuffers: [],
            _onNativeResponse: [Function],
            _currentRequest: [Circular],
            _currentUrl:
            'https://rest.bandsintown.com/artists/nkotb/events?app_id=codingbootcamp' },
        [Symbol(isCorked)]: false,
        [Symbol(outHeadersKey)]:
        [Object: null prototype] { accept: [Array], 'user-agent': [Array], host: [Array] } },
    data:
        [ { offers: [Array],
            venue: [Object],
            datetime: '2019-05-17T19:00:06',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404583',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404583?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-18T19:00:50',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404586',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404586?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-21T19:00:29',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404594',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404594?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-22T19:00:57',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404597',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404597?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-23T19:00:29',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404603',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404603?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-24T19:00:03',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404605',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404605?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-25T19:00:48',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404608',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404608?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-26T19:00:32',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404664',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404664?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-28T19:00:44',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404667',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404667?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-29T19:00:25',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404674',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404674?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-05-30T19:00:20',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404679',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404679?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-01T19:00:56',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404682',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404682?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-02T19:00:44',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404690',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404690?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-04T19:00:32',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404715',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404715?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-06T19:00:13',
            on_sale_datetime: '',
            description: '',
            lineup: [Array],
            id: '100404743',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/100404743?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-07T20:00:00',
            on_sale_datetime: '2018-10-09T18:55:00',
            description: '',
            lineup: [Array],
            id: '1012079667',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079667?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-08T20:00:00',
            on_sale_datetime: '2018-10-12T15:00:00',
            description: '',
            lineup: [Array],
            id: '1012078545',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078545?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-09T19:30:00',
            on_sale_datetime: '2018-10-12T15:00:00',
            description: '',
            lineup: [Array],
            id: '1012078644',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078644?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-11T19:30:00',
            on_sale_datetime: '2018-10-12T15:00:00',
            description: '',
            lineup: [Array],
            id: '1012079641',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079641?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-12T19:30:00',
            on_sale_datetime: '2018-10-12T15:00:00',
            description: '',
            lineup: [Array],
            id: '1012079638',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079638?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-13T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078858',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078858?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-14T20:01:00',
            on_sale_datetime: '2018-10-10T17:19:00',
            description: '',
            lineup: [Array],
            id: '1012078707',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078707?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-15T20:00:00',
            on_sale_datetime: '2018-10-19T15:00:00',
            description: '',
            lineup: [Array],
            id: '1012168070',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012168070?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-18T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078637',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078637?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-19T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078646',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078646?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-21T20:00:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078879',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078879?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-22T20:00:00',
            on_sale_datetime: '2018-10-12T16:00:00',
            description: '',
            lineup: [Array],
            id: '1012079629',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079629?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-23T19:30:00',
            on_sale_datetime: '2018-10-12T16:00:00',
            description: '',
            lineup: [Array],
            id: '1012079708',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079708?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-25T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078717',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078717?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-27T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012079627',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079627?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-28T20:00:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078871',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078871?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-29T19:30:00',
            on_sale_datetime: '2018-10-09T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012122507',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012122507?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-06-30T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078670',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078670?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-02T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description:
            'To purchase advance parking for this event, please click here: https://prucenter.clickandpark.com/',
            lineup: [Array],
            id: '1012079616',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079616?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-03T19:30:00',
            on_sale_datetime: '2018-10-09T17:41:00',
            description: '',
            lineup: [Array],
            id: '1012079566',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079566?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-05T20:00:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012079707',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079707?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-06T19:30:00',
            on_sale_datetime: '2018-10-10T16:52:00',
            description:
            'Patrons 2yrs and older require a ticket. Artist(s) subject to change. Due to security enhancements, please arrive at least 45-60 minutes prior to event time. Please only bring essential items with you. Hersheypark Stadium will only permit bags/backpacks that are 12"x12"x6" or smaller and clear 1-gallon bags. Any bags/backpacks that are larger in size will need to be returned to the owners vehicle or disposed of. No audio/video recording. Rain Or Shine Tickets can be purchased online up to 1 hour prior to event start time. After this time, if tickets are still available, they can be purchased at the Hersheypark Stadium Box Office',
            lineup: [Array],
            id: '1012078874',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078874?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-07T19:30:00',
            on_sale_datetime: '2018-10-10T17:23:00',
            description: '',
            lineup: [Array],
            id: '1012079686',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079686?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-09T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078575',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078575?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-10T19:30:00',
            on_sale_datetime: '2018-10-09T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012078573',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078573?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-11T19:30:00',
            on_sale_datetime: '2018-10-12T14:00:00',
            description: '',
            lineup: [Array],
            id: '1012079623',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079623?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-12T20:00:00',
            on_sale_datetime: '2018-10-10T17:26:00',
            description: '',
            lineup: [Array],
            id: '1012078796',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012078796?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-13T20:01:00',
            on_sale_datetime: '2018-10-09T19:09:00',
            description: '',
            lineup: [Array],
            id: '1012079625',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079625?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
        { offers: [Array],
            venue: [Object],
            datetime: '2019-07-14T19:00:00',
            on_sale_datetime: '2018-10-10T17:13:00',
            description:
            'A $6.00 per ticket Traffic Control Fee will be included in the listed Service Fee upon payment for this event. This fee will include access to general parking at BB&T Center for the date of the event for which the ticket was purchased. Simply show your ticket at the parking gates to be scanned upon entry. This policy is in effect for tickets purchased at full price via Ticketmaster and for tickets purchased at full price at the BB&T Center box office prior to day of event. This policy is limited to specified events and may not apply to promotional ticket offers. **Traffic Control Fee is not included in Platinum and VIP Tickets**',
            lineup: [Array],
            id: '1012079652',
            artist_id: '1075',
            url:
            'https://www.bandsintown.com/e/1012079652?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' } ] }
    undefined