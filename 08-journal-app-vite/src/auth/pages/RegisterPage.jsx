import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
	return (
		<AuthLayout title='Create an account'>
			<form>
				<Grid container >
					<Grid item xs={ 12 } sx={{ mb: 2 }}>
						<TextField 
							label="Full Name" 
							type="text" 
							placeholder='Your full name'
							fullWidth={ true }
						>
						</TextField>
					</Grid>

					<Grid item xs={ 12 } sx={{ mb: 2 }}>
						<TextField 
							label="Email Address" 
							type="email" 
							placeholder='email@example.com'
							fullWidth={ true }
						>
						</TextField>
					</Grid>

					<Grid item xs={ 12 } sx={{ mb: 2 }} >
						<TextField 
							label="Password"  
							type="Password"  
							placeholder='********'
							fullWidth={ true }
						>
						</TextField>
					</Grid>

					<Grid item xs={ 12 } sx={{ mb: 2 }} >
						<TextField 
							label="Confirm Password"  
							type="Password"  
							placeholder='********'
							fullWidth={ true }
						>
						</TextField>
					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2 }}>
						<Grid item xs={ 12 }>
							<Button variant="contained" fullWidth >
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
				</Grid>
			</form>
		</AuthLayout>
	)
} 