import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {
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
					<Typography variant="h6" noWrap component='div' >Gisbel Torres</Typography>
				</Toolbar>
				<Divider />

				<List>
					{
						['Enero', 'Febrero', 'Marzo', 'Abril'].map((item, index) => (
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
