var axios = require('axios');

// current weather
//https://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

// 5 day weather
//https://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

var api_key = '502406f67bc5c08321127e72dffabb39';
var params = '&type=accurate&APPID=' + api_key;

function get5DayWeather (city) {
	return axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + params + '&cnt=5')
		.then(function (weather) {
			return weather.data;
		});
}

function getCurrentWeather (city) {
	return axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + params)
		.then(function (weather) {
			return weather.data;
		});
}

function handleError (error) {
	console.warn(error);
	return null;
}

module.exports =  {
	get5DayWeather: get5DayWeather,
	getCurrentWeather: getCurrentWeather
};