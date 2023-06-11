import { types } from "../types/types";

// We are going to occupy a reducer because we want to have a lot of control of the state. 
export const authReducer = () => (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state, //it is useful to keep the previous state in case we want to add more properties to our state.
				logged: true,
				user: action.payload
			}

		case types.logout:
			return {
				logged: false,
			}
	
		default:
			return state;
	}
}