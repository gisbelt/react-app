import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

	const status = useCheckAuth()
	if( status === 'checking' ) {
		return <CheckingAuth />
	}

	return (
		<Routes>
			{ 
				(status === 'authenticated')
				? <Route path="/*" element={ <JournalRoutes />} /> // Journal App 
				: <Route path="/auth/*" element={ <AuthRoutes />} /> // Login and Register
			}

			{/* Any other route */}
			<Route path="/*" element={ <Navigate to="/auth/login" /> } /> 
		</Routes>
	)
}
