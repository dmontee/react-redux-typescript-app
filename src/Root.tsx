import * as React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer, { AppState } from "./store";

interface Props {
    initialState: AppState;
    children: React.ReactElement<typeof React.Component>;
}

export default function Root({ initialState, children }: Props) {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return (
        <Provider store={createStoreWithMiddleware(rootReducer, initialState)}>
            {children}
        </Provider>
    );
}
