import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import { counterSlice } from './slices/counter/counterSlices'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
 	reducer: {
		counter: counterSlice.reducer,
		pokemons: pokemonSlice.reducer,
		// Add the to-do api done in /src/store/apis with RTK query
		[todosApi.reducerPath]: todosApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
  	// and other useful features of `rtk-query`.
  	middleware: (getDefaultMiddleware) =>
    	getDefaultMiddleware().concat(todosApi.middleware),

})