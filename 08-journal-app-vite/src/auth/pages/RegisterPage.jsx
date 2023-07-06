import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';

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

	const [formSubmitted, setFormSubmitted] = useState(false)

	const { 
		displayName, email, password, onInputChange, formState, 
		isFormValid, displayNameValid, emailValid, passwordValid, 
	} = useForm(formData, formValidations)

	const onSubmit = e => {
		e.preventDefault()
		setFormSubmitted(true);
	}

	return (
		<AuthLayout title='Create an account'>
			<h1>{ isFormValid ? 'Valido' : 'Incorrecto' }</h1>
			<form onSubmit={ onSubmit }>
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
							error={ !!displayNameValid && formSubmitted }
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
						<Grid item xs={ 12 }>
							<Button type="submit" variant="contained" fullWidth >
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