//packages that we need for this app: spotify web app, requests to access the APIs, dotenv to hide the keys and buffer 
//to turn our client id and client secret into a binary number readible by the Spotify API

const play = require('./spotify.js');
const cityWeather = require('./weather.js');
const weather = require('./weather.json');
const mood = require('./selectMood.js');
const song = require('./songs.json');

play();

var cool= `The mood in ${weather.name} is: ${song.name} by ${song.artists[0].name}`;

console.log(cool);
