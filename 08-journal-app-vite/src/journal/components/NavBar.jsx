import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Avatar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../store/auth/thunks";

const settings = [
	{ title: "Profile", path: "/profile" },
	{ title: "Account", path: "/account" },
	{ title: "Dashboard", path: "/dashboard" },
];

export const NavBar = ({ drawerWidth }) => {

	const dispatch = useDispatch()
	const { photoURL } = useSelector(state => state.auth )

  	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		dispatch( startLogout() );
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
							<Avatar alt="Avatar" src={`${photoURL}`} />
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
						{settings.map((setting, index) => (
							<MenuItem key={index} onClick={handleCloseUserMenu}>
								<Link to={ setting.path } >{setting.title}</Link>
							</MenuItem>
						))}
						<MenuItem onClick={handleCloseUserMenu}>
							<Link type="button" onClick={ handleLogout }>Logout</Link>
						</MenuItem>
					</Menu>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}
