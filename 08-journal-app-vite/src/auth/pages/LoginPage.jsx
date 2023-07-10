import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'

const formData = {
	email: '',
	password: '',
}

const formValidations = {
	email: [(value) => value.includes('@'), 'The email must have an @.'],
	password: [(value) => value.length >= 6, 'The password must be longer than 6 letters.'],
}

export const LoginPage = () => {

	const dispatch = useDispatch()
	const [formSubmitted, setFormSubmitted] = useState(false)

	const { 
		formState, email, password, onInputChange,
		isFormValid, emailValid, passwordValid, 
	} = useForm(formData, formValidations)

	const { status, errorMessage } = useSelector( state => state.auth)
	const isAuthenticating = useMemo( () => status === 'checking', [status] )

	const onSubmit = e => {
		e.preventDefault()
		setFormSubmitted(true);

		if( !isFormValid ) return;
		dispatch( startLoginWithEmailPassword(formState) )
 	}

	const onGoogleSignIn = () => {
		dispatch( startGoogleSignIn() );
		console.log('OnGoogleSign');
	}

	return (
		<AuthLayout title='Login'>
			<form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
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
							error={ !!emailValid && formSubmitted }
							helperText={ emailValid }
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
							error={ !!passwordValid && formSubmitted }
							helperText={ passwordValid }
						>
						</TextField>
					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2 }}>

						<Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
							<Alert severity="error" >
								{ errorMessage }
							</Alert>
						</Grid>

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