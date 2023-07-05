import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {

	const { status } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const { email, password, onInputChange } = useForm({
		email: 'gis@google.com',
		password: '123456',
	})

	const isAuthenticating = useMemo( () => status === 'checking', [status] )

	const onSubmit = e => {
		e.preventDefault()
		dispatch( checkingAuthentication( email, password ))
		console.log({ email, password });
 	}

	const onGoogleSignIn = () => {
		dispatch( startGoogleSignIn() );
		console.log('OnGoogleSign');
	}

	return (
		<AuthLayout title='Login'>
			<form onSubmit={ onSubmit }>
				<Grid container >
					<Grid item xs={ 12 } sx={{ mb: 2 }}>
						<TextField 
							label="Email Address" 
							type="email" 
							placeholder='email@example.com'
							fullWidth={ true }
							name="email"
							value={ email }
							onChange={ onInputChange }
						>
						</TextField>
					</Grid>

					<Grid item xs={ 12 } sx={{ mb: 2 }} >
						<TextField 
							label="Password"  
							type="Password"  
							placeholder='********'
							fullWidth={ true }
							name="password"
							value={ password }
							onChange={ onInputChange }
						>
						</TextField>
					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2 }}>
						<Grid item xs={ 12 } sm={ 6 }>
							<Button
								disabled= { isAuthenticating } 
								type="submit" variant="contained" fullWidth 
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={ 12 } sm={ 6 } >
							<Button 
								disabled= { isAuthenticating }
								onClick={ onGoogleSignIn } variant="contained" fullWidth 
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end' >
						<Link component={ RouterLink } color='inherit' to="/auth/register">
							Create an account
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	)
} 