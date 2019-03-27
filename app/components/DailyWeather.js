var React = require('react');
var helpers = require('../utils/helpers');

function DailyWeather(props) {

	var listItem = props.day;
	var icon = listItem.weather[0].icon;
	var dayOfWeek = helpers.getDayOfTheWeek(listItem.dt_txt);
	var date = helpers.getFormattedDate(listItem.dt_txt);

	return (
	    <div className='date' onClick={props.handleClick}>
	    	<img className='weather-icon' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
	    	<br />{dayOfWeek}
	    	<br />{date}
	    </div>
	);

}

module.exports = DailyWeather;