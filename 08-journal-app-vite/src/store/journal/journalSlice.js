import { createSlice } from '@reduxjs/toolkit';

// active: {
// 	id: 'ABC123', // Id comes from firebase
// 	title: '',
// 	body: '',
// 	date: 123456, // Numerical format
// 	imageUrls: [], // String array: url of images uploaded by people
// }

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: true,
		messageSaved: '', 
		notes: [],
		active: null,
	},
	reducers: {
		addNewEmptyNote: ( state, action ) => {
	
		},
		setActiveNote: ( state, action ) => {
	
		},
		setNote: ( state, action ) => {
	
		},
		setSaving: ( state ) => {
			// state.isSaving = true
		},
		updateNote: ( state, action ) => {
	
		},
		deleteNoteById: ( state, action ) => {
	
		},
	},
})

// Action creators are generated for each case reducer function
export const { 
	addNewEmptyNote, // create a new entry
	setActiveNote, // set what is the active note
	setNote, // load notes when we have already read them from somewhere else
	setSaving, // do something when we are recording the notes
	updateNote, // update a note
	deleteNoteById, // delete a note, the objective would be to remove it from our list.
} = journalSlice.actions