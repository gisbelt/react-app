import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUplaod, loadNotes } from "../../journal/helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNote, setPhotosToActiveNote, setSaving, updatedNote } from "./journalSlice";

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

export const startSaveNote = () => {
	return async( dispatch, getState ) => {
		dispatch( setSaving() );
		
		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		// Remove id property of the note object so as not to create a new note in firestore
		// The delete operator removes a given property from an object
		const noteToFirestore = { ...note }		
		delete noteToFirestore.id; 

		// Referencia al documento en firebase (no usar noteToFirestore porque eliminamos el id)
		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
		// Impact database 
		await setDoc( docRef, noteToFirestore, { merge: true } )
		// Update note locally 
		dispatch( updatedNote(note) )
	}
}

export const startUploadingFiles = ( files = [] ) => {
	return async( dispatch ) => {
		dispatch( setSaving() );

		// Array of all the promises we want to shoot
		const fileUploadPromises = [];
		for( const file of files ) {
			fileUploadPromises.push( fileUplaod(file) )
		}

		// Solve all promises simultaneously
		const photosUrls = await Promise.all( fileUploadPromises );
		dispatch( setPhotosToActiveNote(photosUrls) )
	}
}