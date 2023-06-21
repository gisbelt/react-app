import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: {
		page: 0, //pagination
		pokemons: [],
		isLoading: false
	},
	reducers: {
		startLoadingPokemons: (state, /* action */) => {
			state.isLoading = true
		},
		setPokemos: ( state, action ) => { 
			console.log(action);
		}
	},
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemos } = pokemonSlice.actions