import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'counter',
	initialState: {
		counter: 0,
	},
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoSlice.actions