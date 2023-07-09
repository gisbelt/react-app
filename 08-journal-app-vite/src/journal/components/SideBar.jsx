import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";

const sideBarItems = ['Enero', 'Febrero', 'Marzo', 'Abril'];

export const SideBar = ({ drawerWidth }) => {

	const { displayName } = useSelector(state => state.auth )
	
	return (
		<Box
			component='nav'
			sx={{ width: { sm: `${drawerWidth}px` }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant='permanent' // temporary
				open
				// onClose 
				// ModalProps={{
				// 	keepMounted: true,
				// }}
				sx={{ 
					xs: 'block', 
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component='div' >{ displayName }</Typography>
				</Toolbar>
				<Divider />

				<List>
					{
						sideBarItems.map((item, index) => (
							<ListItem key={ index } disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Grid container>
										<ListItemText  primary={ item }/>
									</Grid>
								</ListItemButton>
							</ListItem>
						))
					}
				</List>
			</Drawer>
		</Box>
	)
}
