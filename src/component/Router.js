import React from "react";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import SignUp from './SignUp';
import UpNext from '../component/UpNext/UpNext.js';
import Homepage from '../App.js';

const ReactRouter = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Homepage} />
				<Route path="/user/UpNext" component={UpNext} />
				<Route path="/user/new" component={SignUp} />
			</div>
		</Router>
	);
};

export default ReactRouter; 