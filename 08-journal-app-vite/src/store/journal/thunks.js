import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../journal/helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNote } from "./journalSlice";

export const startNewNote = () => {
	return async ( dispatch, getState ) => {
		// To disable button
		dispatch( savingNewNote() );

		// get user id
		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		}

		// Create the reference to the document 
		const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ))
		// Insert new note to document 
		const setDocResp = await setDoc( newDoc, newNote )
		// Create the id property to the new note
		newNote.id = newDoc.id;
		// dispatch
		dispatch( addNewEmptyNote(newNote) );
		dispatch( setActiveNote(newNote) )
	}
}

export const startLoadingNote = () => {
	return async( dispatch, getState ) => {
		// get user id
		const { uid } = getState().auth;
		if ( !uid ) throw new Error('User uid is not set') // it should not happen

		// get notes 
		const notes = await loadNotes( uid );
		// dispatch
		dispatch( setNote(notes) )
	}
}