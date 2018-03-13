import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Home from './containers/Home';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Route path="/" component={Home} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('.container')
);