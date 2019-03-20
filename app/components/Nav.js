var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var CityInput = require('./CityInput');

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state =  {
			city: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(city) {
		this.setState(function() {
			return {
				city: city,
			}
		});
	}
	render() {
		var city = this.state.city;

		return (
		    <div className = 'navbar'>
		    	<h1>Check the Weather</h1>
	    		<CityInput onSubmit={this.handleSubmit} flexDirection='row' />
		    </div>
		)
	}
}

module.exports = Nav;