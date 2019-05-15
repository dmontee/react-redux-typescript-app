import { combineReducers } from "redux";
import test, { TestType } from "../features/test";

interface AppState {
    test: TestType;
}

const rootReducer = combineReducers<AppState>({
    test,
});

export default rootReducer;

export { AppState };
