var React = require('react');
var helpers = require('../utils/helpers');
var DailyWeather = require('./DailyWeather');

class Detail extends React.Component {
	render() {
		var details = this.props.location.state;
		var description = details.weather[0].description;
		description = description.charAt(0).toUpperCase() + description.slice(1);
		var temp_max = helpers.convertKtoF(details.main.temp_max).toFixed(0);
		return (
		    <div>
		    	<h1 className='header'>{details.city}</h1>
		    	<div className='details-container'>
			    	<DailyWeather day={details} />
			    	<div className='details'>
				    	<p>{description}</p>
				    	<p>Noon temp: {temp_max}&deg; F</p>
				    	<p>Humidity: {details.main.humidity}%</p>
			    	</div>
			    </div>
		   	</div>
		)
	}
}

module.exports = Detail;