import { Reducer } from "redux";
import { TEST, TestAction } from "../actions";

const test = (state="", action: TestAction) => {
	switch(action.type){
		case TEST:
			return action.payload;
		default:
			return state;
	}
};

export default test;