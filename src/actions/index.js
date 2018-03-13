export const TEST = "TEST";

function test(payload) {
	return{
		type: TEST,
		payload
	};
}