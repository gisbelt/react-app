import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

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