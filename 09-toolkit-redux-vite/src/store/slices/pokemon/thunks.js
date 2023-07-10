// Thunks are an action that is asynchronous or has asynchronous code, 
// which triggers another action when the asynchronous request is resolved. 
import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
	// getState: get all rootState
	return async ( dispatch, getState ) => {
		dispatch( startLoadingPokemons() )

		// Make http request
		// Pokemons data = payload

		// Fetch
		// const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
		// const data = await response.json();

		// Axios
		const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)
		
		dispatch( setPokemons({ pokemons: data.results, page: page + 1 }))
	}
}