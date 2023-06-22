// Thunks are an action that is asynchronous or has asynchronous code, 
// which triggers another action when the asynchronous request is resolved. 
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
	// getState: get all rootState
	return ( dispatch, getState ) => {
		dispatch( startLoadingPokemons() )

		// Make http request
		// Pokemons data = payload

		// dispatch( setPokemons() )

	}
}