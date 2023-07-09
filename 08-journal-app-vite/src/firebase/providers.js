// authentication providers 
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

// create an instance
const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider)
		
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credentials = GoogleAuthProvider.credentialFromResult(result);
		const token = credentials.accessToken; 

		// The signed-in user info.
		const { displayName, email, photoURL, uid } = result.user;
		return {
			ok: true,
			// User info
			displayName, email, photoURL, uid
		}
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		return {
			ok: false,
			errorCode, errorMessage
		}
	}
}

export const loginWithEmailPassword = async({ email, password }) => {
	try {
		const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
		const { uid, photoURL, displayName } = response.user;
		return {
			ok: true,
			uid, photoURL, email, displayName
		}
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message
		}
	}
} 

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
	try {

		const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
		const { uid, photoURL } = response.user;	
		await updateProfile( FirebaseAuth.currentUser, { displayName } );
		return {
			ok: true,
			uid, photoURL, email, displayName
		}
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message
		}
	}
}

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
}