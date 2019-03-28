/* Convert date from Y-m-d H:i:s to Day, Month [day], Year */
function getFormattedDate (dateTime) {
	var event = new Date(dateTime);
	var options = { year: 'numeric', month: 'long', day: 'numeric' };
	return event.toLocaleDateString('en-EN', options);
}

function getDayOfTheWeek (dateTime) {
	var event = new Date(dateTime);
	var options = { weekday: 'long' };
	return event.toLocaleDateString('en-EN', options);
}

function convertKelvinToCelsius (temp) {
	var c = temp - 273.15;
	return c;
}

function convertKelvinToFarenheit (temp) {
	var f = (temp - 273.15) * 9/5 + 32;
	return f;
}

module.exports =  {
	getFormattedDate: getFormattedDate,
	getDayOfTheWeek: getDayOfTheWeek,
	convertKtoC: convertKelvinToCelsius,
	convertKtoF: convertKelvinToFarenheit
};