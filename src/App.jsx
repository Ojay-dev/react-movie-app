import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Info from './pages/movie-selection';

export default function app() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/movie-info/:id" exact component={Info} />
			</Switch>
		</Router>
	);
}
