//packages that we need for this app: spotify web app, requests to access the APIs, dotenv to hide the keys and buffer 
//to turn our client id and client secret into a binary number readible by the Spotify API

const play = require('./spotify.js');
const cityWeather = require('./weather.js');
const weather = require('./weather.json');
const mood = require('./selectMood.js');
const song = require('./songs.json');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
//const { Message } = require('twilio/lib/twiml/MessagingResponse');


play();

var cool= `The mood in ${weather.name} is: ${song.name} by ${song.artists[0].name}`;

client.messages
  .create({
     body: cool,
     from: process.env.TWILIONUMBER,
     to: process.env.MYNUMBER
   })
  .then(message => console.log(message.sid));

console.log(cool);
//import fetch from 'node-fetch';


// const { spawn } = require('child_process');
// const python = spawn('python', ['messagepy.py']);

// python.stdout.on('data', (data) => {
//   console.log('pattern: ', data.toString());
// });

// python.stderr.on('data', (data) => {
//   console.error('err: ', data.toString());
// });

// python.on('error', (error) => {
//   console.error('error: ', error.message);
// });

// python.on('close', (code) => {
//   console.log('child process exited with code ', code);
// });






 

