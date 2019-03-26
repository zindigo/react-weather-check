var React = require('react');
var api = require('../utils/api');
var helpers = require('../utils/helpers');
var queryString = require('query-string');

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: null,
			weatherResult: [],
			loading: false
		}

		this.makeRequest = this.makeRequest.bind(this);
	}
	componentDidMount() {
		const values = queryString.parse(this.props.location.search);
		this.makeRequest(values.city);
	}
	makeRequest(city) {
		this.setState(function () {
			return {
				city: city,
				loading: true
			}
		})

		api.get5DayWeather(city)
			.then(function (result) {
				console.log(result.list)
				this.setState(function() {
					return {
						weatherResult: result,
						loading: false
					}
				})
			}.bind(this))
	}
	render() {
		    return this.state.loading === true
		      ? <div className='header'>Loading...</div>
		      : <div className='forecast-container'>
			    	<h1 className='header'>{this.state.city}</h1>
			    	<WeatherList weatherResult={this.state.weatherResult} />
			    </div>
	}
}

/* Display the 5 day forecast */
function WeatherList(props) {
	var daily = props.weatherResult;
	var noon = '12:00:00';
	// filter out the results to only get daily weather at noon
	var dailyItems = daily.filter(function(day) {
		return day.dt_txt.includes(noon);
	});
	console.log(dailyItems);
	var listItems = dailyItems.map(function(day) {
		var icon = day.weather[0].icon;
		var dayOfWeek = helpers.getDayOfTheWeek(day.dt_txt);
		var date = helpers.getFormattedDate(day.dt_txt);
		return (
		    <div className='date' key={day.dt}>
		    	<img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
		    	<br />{dayOfWeek}
		    	<br />{date}
		    </div>
		);
	});
	return (
	    <div className='daily-weather'>{listItems}</div>
	);
}


module.exports = Forecast;