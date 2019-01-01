import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById("container")
);
