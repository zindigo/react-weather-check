var React = require('react');
var PropTypes = require('prop-types');
var helpers = require('../utils/helpers');

function DailyWeather(props) {

	var listItem = props.day;
	var icon = listItem.weather[0].icon;
	var dayOfWeek = helpers.getDayOfTheWeek(listItem.dt_txt);
	var date = helpers.getFormattedDate(listItem.dt_txt);
	var imgPath = process.env.NODE_ENV === 'production' ? '/images/' : 'app/images/weather-icons/';

	return (
	    <div className='txt-center daily-weather' onClick={props.onClick}>
	    	<img className='weather-icon' src={imgPath + icon + '.svg'} alt='Weather' />
	    	<br />{dayOfWeek}
	    	<br />{date}
	    </div>
	);

}

DailyWeather.propTypes = {
	day: PropTypes.object.isRequired,
	onClick: PropTypes.func
}

module.exports = DailyWeather;