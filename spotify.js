var SpotifyWebApi = require('spotify-web-api-node');
var request = require('request'); // "Request" library
const dotenv = require('dotenv').config();
const { Buffer } = require('buffer');
const mood = require('./selectMood.js');
const weather = require('./weather.json');
const fs = require('fs');
const moodSelector = require('./selectMood.js');

//list of all of the playlists we are going to use to describe the weather

var mood_booster = '37i9dQZF1DX3rxVfibe1L0';
var happy_beats = '37i9dQZF1DXdPec7aLTmlC';
var confidence_boost = '37i9dQZF1DX4fpCWaHOned';
var jazz = '37i9dQZF1DX0SM0LYsmbMT0';
var good_vibes = '37i9dQZF1DWYBO1MoTDhZI';
var sunny_day = '37i9dQZF1DWUE76cNNotSg';
var tears = '37i9dQZF1DX6xZZEgC9Ubl';
var idk = '37i9dQZF1DX59NCqCqJtoH';
var feels = '37i9dQZF1DX7gIoKXt0gmx';
var life_sux = '37i9dQZF1DX3YSRoSdA634';
var chill_rnb = '37i9dQZF1DX2UgsUIg75Vg';
var down = '37i9dQZF1DWSqBruwoIXkA';
var rainy_jazz = '37i9dQZF1DWYxwmBaMqxsl';
var mid_summer = '37i9dQZF1DXca8AyWK6Y7g';
var lowkey = '37i9dQZF1DX2yvmlOdMYzV';
var rainy_thunder = '37i9dQZF1DX9LT7r8qPxfa';
var late_night_cold = '37i9dQZF1DX15JKV0q7shD';
var christmas = '37i9dQZF1DX0Yxoavh5qJV';

//playlistSelected

const playlistSelected = mood();

//const urr = `https://open.spotify.com/v1/playlists/${playlistSelected}/tracks`;

//now we access the spotify api to pick a playlist for that weather

var playlist = function(){
    var spotifyApi = new SpotifyWebApi();

    var bufee = Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')
    //console.log(bufee)
    // your application requests authorization
    var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + bufee
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
       
       /*
        console.log(token)
        var options = {
        url: `https://open.spotify.com/v1/playlists/${playlistSelected}/tracks`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        json: true
        };
        request.get(options, function(error, response, body) {
            console.log(body);
        });

        */

        spotifyApi.setAccessToken(token);

        spotifyApi
        .getPlaylistTracks(`${playlistSelected}`, {
            offset: 1,
            limit: 1,
            fields: 'items'
          })
          .then(
            function(data) {
              //console.log('The playlist contains these tracks', data.body.items[0]);
              let songs = {name: '', artists: ''};

              songs.name = data.body.items[0].track.name;
              songs.artists = data.body.items[0].track.artists;

              fs.writeFileSync('songs.json', JSON.stringify(songs));
              return songs;
              },
            function(err) {
              console.log('Something went wrong!', err);
            }
          );
        
    }
    });
}

module.exports = playlist;
