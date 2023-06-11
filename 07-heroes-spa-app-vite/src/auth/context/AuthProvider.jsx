import { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

// we don't need the initialstate 
// const initialState = {
// 	logged: false
// }

const init = () =>{
	const user = JSON.parse(localStorage.getItem('user')) //If it returns null, it means that there is no user
	return {
		logged: !!user, //If it exists, with double negation we say that it will be true.
		user: user
	}
}

export const AuthProvider = ({ children }) => {

	const [ authState, dispatch ] = useReducer( authReducer, {}, init );

	const login = () => {
		const user = { id: 'ABC', name: 'Gisbel Torres' }
		const action = { type: types.login, payload: user }
		localStorage.setItem('user', JSON.stringify(user));
		dispatch( action );
	}

	const logout = () => {
		localStorage.removeItem('user');
		const action = { type: types.logout }
		dispatch( action );
	}

	return (
		<AuthContext.Provider value={{
			authState,
			login,
			logout
		}}>
			{ children }
		</AuthContext.Provider>
	);
}
