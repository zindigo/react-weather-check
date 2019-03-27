var React = require('react');
var api = require('../utils/api');
var helpers = require('../utils/helpers');
var queryString = require('query-string');
var DailyWeather = require('./DailyWeather');

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: null,
			weatherResult: [],
			loading: false
		}

		this.makeRequest = this.makeRequest.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

		var allWeather = api.get5DayWeather(city)
			.then(function (result) {
				this.setState(function() {

					// filter out the results to only get daily weather at noon
					var noon = '12:00:00';
					var fiveDaysOfWeather = result.filter(function(day) {
						return day.dt_txt.includes(noon);
					});

					return {
						weatherResult: fiveDaysOfWeather,
						loading: false
					}
				})
			}.bind(this));

	}
	handleClick(listItem) {
		console.log('item clicked');
	}
	render() {
		    return this.state.loading === true
		      ? <div className='header'>Loading...</div>
		      : <div>
		      		<h1 className='header'>{this.state.city}</h1>
			      	<div className='forecast-container'>
			      		{this.state.weatherResult.map(function(dailyItem) {
			      			return (
			      				<DailyWeather onClick={this.handleClick.bind(this, dailyItem)} day={dailyItem} key={dailyItem.dt} />
			      			)
			      		}, this) }
				    </div>
				</div>
	}
}

module.exports = Forecast;