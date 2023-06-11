import { useContext } from 'react';
import { AuthContext } from './auth/context/AuthContext';
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRoutes } from './routes/AppRoutes'

export const HeroesApp = () => {

    // const { user } = useContext( AuthContext )	

	// useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify( user ));
    // }, [user]);

    return (
        <AuthProvider >        
            <AppRoutes />
        </AuthProvider>
    )
}
