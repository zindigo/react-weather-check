var React = require('react');
var helpers = require('../utils/helpers');
var DailyWeather = require('./DailyWeather');
var ReactRouter = require('react-router-dom');
var BrowserHistory = ReactRouter.BrowserHistory;

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noonTemp: null,
			units: 'F' // default (C=Celsius, F=Farenheit)
		}

		this.handleClick = this.handleClick.bind(this);
		this.findNoonTemp = this.findNoonTemp.bind(this);
	}
	componentDidMount() {
		// Find default temperature (Farenheit)
		this.setState(function () {
			return {
				noonTemp: this.findNoonTemp(this.state.units)
			}
		})
	}
	findNoonTemp(units) {

		var temp = 0;
		var details = this.props.location.state;

		if (units == 'F') { // convert to Farenheit
			temp = helpers.convertKtoF(details.main.temp_max).toFixed(0);
		}
		else if (units == 'C') { // convert to Celsius
			temp = helpers.convertKtoC(details.main.temp_max).toFixed(0);
		}

		return temp;
	}
	handleClick(units) {
		this.setState(function () {
			return {
				noonTemp: this.findNoonTemp(units),
				units: units
			}
		})
	}
	render() {
		var details = this.props.location.state;
		var description = details.weather[0].description;
		description = helpers.capitalize(description);

		return (
		    <div className='txt-center'>
		    	<h1 className='header'>{details.city}</h1>
		    	<div className='details-container'>
			    	<DailyWeather day={details} />
			    	<div className='details'>
				    	<p>{description}</p>
				    	<p>Noon Temperature: {this.state.noonTemp}&deg; {this.state.units}<br />
				    	<button className='btn btn-info' onClick={this.handleClick.bind(this, 'C')}>&deg; C</button>
				    	<button className='btn btn-info' onClick={this.handleClick.bind(this, 'F')}>&deg; F</button>
				    	</p>
				    	<p>Humidity: {details.main.humidity}%</p>
			    	</div>
			    </div>
			    <button
		    		onClick={this.props.history.goBack}
		    		className='btn btn-success'
		    		type='submit'
		    		style={{ margin: '10px' }}>
		    			&lt;- Go Back
		    	</button>
		   	</div>
		)
	}
}

module.exports = Detail;