import { TEST } from '../actions/';

const test = (state='', action) => {
	switch(action.type){
		case TEST:
			return action.payload;
		default:
			return state;
	}
};

export default test;