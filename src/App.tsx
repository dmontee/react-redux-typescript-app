import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root"; // tslint:disable-line

import Home from "./pages/Home";

const App = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Home} />
        </div>
    </BrowserRouter>
);

export default hot(App);
