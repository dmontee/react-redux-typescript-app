import { TestAction, TestActionTypes } from "./types";

const test = (state = "", action: TestAction) => {
    switch (action.type) {
        case TestActionTypes.TEST:
            return action.payload;
        default:
            return state;
    }
};

export default test;
