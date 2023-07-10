import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const formData = {
	email: '',
	password: '',
	displayName: ''
}

const formValidations = {
	email: [(value) => value.includes('@'), 'The email must have an @.'],
	password: [(value) => value.length >= 6, 'The password must be longer than 6 letters.'],
	displayName: [(value) => value.length >= 1, 'The name is required.']
}

export const RegisterPage = () => {

	const dispatch = useDispatch()
	const [formSubmitted, setFormSubmitted] = useState(false)

	const { status, errorMessage } = useSelector( state => state.auth)
	const isCheckingAuthetication = useMemo( () => status === 'checking', [status])

	const { 
		displayName, email, password, onInputChange, formState, 
		isFormValid, displayNameValid, emailValid, passwordValid, 
	} = useForm(formData, formValidations)

	const onSubmit = e => {
		e.preventDefault()
		setFormSubmitted(true);

		if( !isFormValid ) return;
		dispatch( startCreatingUserWithEmailPassword(formState) )
	}

	return (
		<AuthLayout title='Create an account'>
			<h1>{ isFormValid ? 'Valido' : 'Incorrecto' }</h1>
			<form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
				<Grid container >
					<Grid item xs={ 12 } sx={{ mb: 2 }}>
						<TextField 
							label="Full Name" 
							type="text" 
							placeholder='Your full name'
							fullWidth={ true }
							name="displayName"
							value={displayName}
							onChange={onInputChange}
							error={ !!displayNameValid && formSubmitted } //both true
							helperText={ displayNameValid }
						>
						</TextField>
					</Grid>

					<Grid item xs={ 12 } sx={{ mb: 2 }}>
						<TextField 
							label="Email Address" 
							type="email" 
							placeholder='email@example.com'
							fullWidth={ true }
							name="email"
							value={email}
							onChange={onInputChange}
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
							value={password}
							onChange={onInputChange}
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

						<Grid item xs={ 12 }>
							<Button 
								disabled={ isCheckingAuthetication }
								type="submit" 
								variant="contained" fullWidth 
							>
								Sing up
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end' >
						<Typography sx={{ mr: 1 }}>Already have an account?</Typography>
						<Link component={ RouterLink } color='inherit' to="/auth/login">
							Login
						</Link>
					</Grid>

					<Grid container spacing={ 1 } sx={{ mt: 2 }}>
						<Grid item xs={ 12 } >
							<Typography>Name: { !!displayNameValid ? (<HighlightOffIcon color='error' />) : (<CheckCircleOutlineIcon color='primary' />) }</Typography>
							<Typography>Email: { !!emailValid ? (<HighlightOffIcon color='error' />) : (<CheckCircleOutlineIcon color='primary' />) }</Typography>
							<Typography>Password: { !!passwordValid ? (<HighlightOffIcon color='error' />) : (<CheckCircleOutlineIcon color='primary' />) }</Typography>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	)
} 