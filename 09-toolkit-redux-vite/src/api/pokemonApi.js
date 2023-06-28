import axios from 'axios'

// allows us to create a standard configuration that will help us to avoid repeating code over and over again. 
export const pokemonApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2'
});