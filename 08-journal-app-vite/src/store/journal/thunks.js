import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
	return async ( dispatch, getState ) => {

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
		// dispatch( newNote )
		// dispatch( activeNote )
	}
}