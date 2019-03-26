/* Convert date from Y-m-d H:i:s to Day, Month [day], Year */
function getFormattedDate (dateTime) {
	var event = new Date(dateTime);
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	return event.toLocaleDateString('en-EN', options);
}

module.exports =  {
	getFormattedDate: getFormattedDate
};