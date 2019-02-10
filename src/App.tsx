import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Home from "./pages/home";

const App = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Home} />
        </div>
    </BrowserRouter>
);

export default hot(App);
