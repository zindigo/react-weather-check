var axios = require('axios');

// current weather
//https://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&APPID=YOUR-API-KEY

// 5 day weather
//https://api.openweathermap.org/data/2.5/forecast?q=CITY-NAME&APPID=YOUR-API-KEY

var api_key = '502406f67bc5c08321127e72dffabb39';
var params = '&APPID=' + api_key;

function get5DayWeather (city) {
	return axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + params)
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