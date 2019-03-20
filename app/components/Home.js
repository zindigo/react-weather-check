var React = require('react');
var Link = require('react-router-dom').Link;
var CityInput = require('./CityInput');
var Forecast = require('./Forecast');

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state =  {
			city: null,
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
		var backgroundImage = "app/images/pattern.svg";

		return (
		    <div className='home-container' style={{ backgroundImage: 'url(' + backgroundImage + ')' }}>
				<h1 className='header'>
		    		Enter a City and State
		    	</h1>
		    	{!city &&
		    		<CityInput
		    			label='Enter a City and State'
		    			onSubmit={this.handleSubmit}
		    			flexDirection='column'
		    		/>
		    	}
		    	{city !== null &&
		    		<Forecast />
		    	}
		    </div>
		)
	}
}

module.exports = Home;