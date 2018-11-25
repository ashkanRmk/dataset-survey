import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './components/welcome';
import Survey from './components/survey/survey';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Start} />
							<Route path="/start" component={Survey} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
