const weather = require('./weather.json');

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
var Rainy_jazz = '37i9dQZF1DWYxwmBaMqxsl';
var mid_summer = '37i9dQZF1DXca8AyWK6Y7g';
var lowkey = '37i9dQZF1DX2yvmlOdMYzV';
var Rainy_thunder = '37i9dQZF1DX9LT7r8qPxfa';
var late_night_cold = '37i9dQZF1DX15JKV0q7shD';
var christmas = '37i9dQZF1DX0Yxoavh5qJV';

//Selects a playlist based on the weather

var moodSelector = function(){

    if(weather.description == 'Clear' && Number(weather.temp) >= 20 && Number(weather.temp) <= 25){

        return(happy_beats);

    }

    else if(weather.description == 'Clear' && Number(weather.temp) > 25 && Number(weather.temp) <= 30){

        return(sunny_day);
        
    }

    else if(weather.description == 'Clouds' && Number(weather.temp) > 30){

        return(good_vibes);

    }

    else if(weather.description == 'Clouds' && Number(weather.temp) < 25 &&  Number(weather.temp) > 10){
        
        return(mood_booster);

    }

    else if(weather.description == 'Drizzle' && Number(weather.temp) <= 30){

        return(Rainy_jazz);

    }

    else if(weather.description == 'Atmosphere'){

        return(jazz);

    }

    else if(weather.description == 'Rain' && Number(weather.temp) >= 20 && Number(weather.temp) <= 25){

        return(confidence_boost);

    }

    else if(weather.description == 'Rain' && Number(weather.temp) > 15 && Number(weather.temp) < 20){

        return(tears);

    }

    else if(weather.description == 'Rain' && Number(weather.temp) <=15){

        return(idk);

    }

    else if(weather.description == 'Clear' && Number(weather.temp) >= 15 && Number(weather.temp) < 20){

        return(life_sux);

    }

    else if(weather.description == ('Clear' || 'Clouds') && Number(weather.temp) <= 10){

        return(chill_rnb);

    }

    else if(weather.description == 'Clear' && Number(weather.temp) > 10 && Number(weather.temp) < 15){

        return(down);

    }

    else if(weather.description == ('Clear' || 'Clouds') && Number(weather.temp) > 30){

        return(mid_summer);

    }

    else if(weather.description == 'Clouds'  && Number(weather.temp) >= 25 && Number(weather.temp) <= 30){

        return(happy_beats);

    }
    
    else if(weather.description == 'Thunderstorm'){

        return(Rainy_thunder);

    }

    else if(Number(weather.temp) >= 20 && Number(weather.temp) <= 5){

        return(late_night_cold);

    }

    else if(weather.description == 'Snow'){

        return(christmas);

    }

}

module.exports = moodSelector;
