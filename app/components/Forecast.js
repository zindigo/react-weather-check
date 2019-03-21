var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
				loading: true
			}
		})

		api.get5DayWeather(city)
			.then(function (result) {
				console.log(result)
				this.setState(function() {
					return {
						loading: false
					}
				})
			}.bind(this))
	}
	render() {
		    return this.state.loading === true
		      ? <div>Loading</div>
		      : <DailyWeather />
	}
}

function DailyWeather (result) {
	return (
	    <div>Test Daily Weather</div>
	)
}


module.exports = Forecast;