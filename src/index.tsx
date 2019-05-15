import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./Root";
import initialState from "./store/initialState";
import App from "./App";

import "../styles/vendors.css";

ReactDOM.render(
    <Root initialState={initialState}>
        <App />
    </Root>,
    document.getElementById("container")
);
