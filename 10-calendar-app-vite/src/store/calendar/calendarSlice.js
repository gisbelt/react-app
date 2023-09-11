import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState: {
		counter: 0,
	},
	reducers: {
		increment: (state, /* action */) => {
			state.counter += 1;
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = calendarSlice.actions