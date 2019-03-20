var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
	componentDidMount() {
		const values = queryString.parse(this.props.location.search);
		api.get5DayWeather(values.city);
	}
	render() {
		return (
		    <div className='home-container'>
		    	<h1>Forecast</h1>
		    </div>
		)
	}
}

module.exports = Forecast;