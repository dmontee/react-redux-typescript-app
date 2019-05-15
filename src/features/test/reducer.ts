import { TestAction, TestActionTypes } from "./types";

type TestType = string;

const test = (state: TestType = "", action: TestAction): TestType => {
    switch (action.type) {
        case TestActionTypes.TEST:
            return action.payload;
        default:
            return state;
    }
};

export default test;

export { TestType };
