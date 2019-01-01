import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Home from "./containers/Home";

const App = () => (
	<BrowserRouter>
		<div>
			<Route path="/" component={Home} />
		</div>
	</BrowserRouter>
);

export default hot(App);