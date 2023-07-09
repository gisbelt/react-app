import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const useCheckAuth = () => {
	const dispatch = useDispatch()
	const { status } = useSelector( state => state.auth );

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async( user ) => {
			if( !user ) return dispatch( logout() );
			const { uid, email, displayName, photoURL } = user;
			dispatch( login({ uid, email, displayName, photoURL }) );
		})
	}, [])

	return status;
}	
