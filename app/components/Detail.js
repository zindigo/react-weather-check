var React = require('react');
var DailyWeather = require('./DailyWeather');

class Detail extends React.Component {
	render() {
		console.log('test: ');
		console.log(this.props.location.state);
		var details = this.props.location.state;
		var description = details.weather[0].description;
		description = description.charAt(0).toUpperCase() + description.slice(1);
		return (
		    <div>
		    	<h1 className='header'>{details.city}</h1>
		    	<div className='details-container'>
			    	<DailyWeather day={details} />
			    	<div className='details'>
				    	<p>{description}</p>
				    	<p>Min temp: {details.main.temp_min} degrees</p>
				    	<p>Max temp: {details.main.temp_max} degrees</p>
				    	<p>Humidity: {details.main.humidity}%</p>
			    	</div>
			    </div>
		   	</div>
		)
	}
}

module.exports = Detail;