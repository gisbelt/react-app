import { AuthProvider } from './auth/context/AuthProvider'
import { AppRoutes } from './routes/AppRoutes'

export const HeroesApp = () => {
    return (
        <AuthProvider >        
            <AppRoutes />
        </AuthProvider>
    )
}
