var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
	return (
	    <div className = 'navbar'>
	    	<div className='left'>
	    		Logo here
	    	</div>
	    	<div className='right'>
	    		Form here
	    	</div>
	    </div>
	)
}

module.exports = Nav;