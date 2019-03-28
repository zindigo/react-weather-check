var React = require('react');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Link = ReactRouter.Link;
var Forecast = require('./Forecast');
var Detail = require('./Detail');
var CityInput = require('./CityInput');

class App extends React.Component {
	render() {
		return (
		    <BrowserRouter forceRefresh={true}>
			    <div className='container'>
				    <Route render={function (props) {
	            		return (
					    	<div className='navbar'>
						    	<h1><Link to='/' className='h1'>Check The Weather</Link></h1>
					    		<CityInput
					    			onSubmit={function(city) {
					                    props.history.push({
					                      pathname: '/forecast',
					                      search: '?city=' + city
					                    });
					                }}
					    			flexDirection='row' />
						    </div>
						)
					}} />

				    <Route exact path='/' render={function (props) {
				    	return (
				    	    <div className='home-container' style={{ backgroundImage: "url('app/images/pattern.svg')"}}>
				    	    	<h1 className='header'>Enter a City and State</h1>
				    	    	<CityInput
					    			onSubmit={function(city) {
					                    props.history.push({
					                      pathname: '/forecast',
					                      search: '?city=' + city
					                    });
					                }}
					    			flexDirection='column' />
					    	</div>
				    	)
				    }} />

				    <Route path='/forecast' component={Forecast} />

				    <Route path='/detail' component={Detail} />

			    </div>
		    </BrowserRouter>
		)
	}
}

module.exports = App;