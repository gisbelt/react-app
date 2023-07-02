// authentication providers 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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