var React = require('react');

class Details extends React.Component {
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

module.exports = Details;