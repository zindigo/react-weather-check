var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class CityInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		var value = event.target.value;

		this.setState(function() {
			return {
				city: value
			}
		})
	}
	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(
		    this.state.city
		)
	}
	render() {
		return (
		    <form className='column' onSubmit={this.handleSubmit}>
		    	<label className='header' htmlFor='username'>
		    		{this.props.label}
		    	</label>
		    	<input
		    		id='city'
		    		placeholder='Orlando, Florida'
		    		type='text'
		    		autoComplete='off'
		    		value={this.state.city}
		    		onChange={this.handleChange}
		    	/>
		    	<button
		    		className='button'
		    		type='submit'
		    		disabled={!this.state.city}>
		    			Submit
		    	</button>
		    </form>
		)
	}
}

CityInput.propTypes = {
	label: PropTypes.string,
	onSubmit: PropTypes.func.isRequired
}

module.exports = CityInput;