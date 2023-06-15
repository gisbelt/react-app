import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Avatar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavBar = ({ drawerWidth }) => {

  	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleClick = () => {
		if (settings.includes('Logout')) {
			<Navigate to="/auth" />
		}
	}

	return (
		<AppBar
			position="fixed"
			sx={{ 
				width: {sm: `calc(100% - ${drawerWidth}px)`},
				ml: { sm: `${drawerWidth}px`}
			}}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2, display: { sm: 'none' }}}
				>
					<MenuOutlined />
				</IconButton>
			

				<Grid container direction='row' justifyContent='space-between' alignItems='center'>

					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						Journal App
					</Typography>

					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
						  vertical: 'top',
						  horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
						  vertical: 'top',
						  horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Link to={ handleClick } >{setting}</Link>
							</MenuItem>
						))}
					</Menu>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}
