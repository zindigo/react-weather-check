var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class CityInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: '',
			flexDirection: null
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		var value = event.target.value;
		console.log('value changed: '+value);

		this.setState(function() {
			return {
				city: value
			}
		})
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log('form submitted');
		console.log(this.state.city);

		this.props.onSubmit(
		    this.state.city
		)
	}
	render() {
		var flexDirection = this.props.flexDirection;

		return (
		    <div className='city-container' style={{ flexDirection: flexDirection }}>
		    	<input
		    		className='form-control'
		    		id='city'
		    		placeholder='Orlando, Florida'
		    		type='text'
		    		autoComplete='off'
		    		value={this.state.city}
		    		onChange={this.handleChange}
		    	/>
		    	<button
		    		onClick={this.handleSubmit}
		    		className='btn btn-success'
		    		type='submit'
		    		style={{ margin: '10px' }}>
		    			Get Weather
		    	</button>
		    </div>
		)
	}
}

CityInput.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

module.exports = CityInput;