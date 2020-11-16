var request = require('request'); // "Request" library
const dotenv = require('dotenv').config();
const fs = require('fs');

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
}

//list of city IDs we are going to use to randomly choose from

var cities = ['1796236', '1816670', '1819729', '1273294', '1859171', '745044', '1850147', '1609350', '98182', '112931', '1880252', '1795940'
, '6167865', '3882428', '5106292', '5110302', '4887398', '3530597','5977783', '6090785', '5882873', '6077265', '3553478', '4560349', '5308655',
'5312913', '5332593', '5336269', '5338166', '524901', '361058', '2553604', '6058560', '3391408', '2267057', '2268339', '2740761', '2269594',
 '2268436', '3117735', '3128760', '2510911', '2950159', '2935517', '6942553', '2761369', '4219762', '3165524', '4641630', '264371',
 '3448439', '3109642', '2995469', '3983671', '6185377', '2673730', '3435910', '3688689', '3674962', '360630', '993800', '2314302', '184745',
, '292223', '2158177', '2159851', '2147714'];

//get a random city from the list above

var weatherCity = function(random){

    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cities[random]}&units=metric&appid=${process.env.API_KEY}`

    var info = {description: '', temp: '', name:''};
    

    request.get(url, function(error, response, body){
        if(!error){
            const data = JSON.parse(body);
            //console.log(typeof(data));
            info.description = data.weather[0].main;
            info.temp = data.main.temp;
            info.name = data.name;
            fs.writeFileSync('weather.json', JSON.stringify(info));
        }
        
    });
}

var random = between(0,66);

weatherCity(random);
