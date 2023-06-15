import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

export const LoginPage = () => {
	return (
		<Grid
			container
			spacing={ 0 }
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: '100vh', width: '100vw', backgroundColor: 'primary.main', padding: 4 }}
		>
			<Grid
				item
				className='box-shadow'
				xs={ 3 } //On small screens, 3 positions
				sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }} //allows us to work with the styles property
			>
				<Typography variant='h5' sx={{ mb: 2 }}>Login</Typography>
				<form>
					<Grid container >
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

						<Grid container spacing={ 2 } sx={{ mb: 2 }}>
							<Grid item xs={ 12 } sm={ 6 }>
								<Button variant="contained" fullWidth >
									Login
								</Button>
							</Grid>
							<Grid item xs={ 12 } sm={ 6 } >
								<Button variant="contained" fullWidth >
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
			</Grid>
		</Grid>
	)
} 