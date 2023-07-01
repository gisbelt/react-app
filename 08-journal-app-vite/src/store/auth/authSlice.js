import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'not-authenticated', // checking, not-authenticated, authenticated
		uid: null,
		email: null,
		displayName: null,
		photoURL: null, // when google or a social network provides us with a url for the photo and we can store it.
		errorMessage: null,
	},
	reducers: {
		login: (state, action) => {
			
		},
		logout: (state, payload) => {
			
		},
		checkingCredentials: (state) => {
			state.status = 'checking';
		},
	},
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions