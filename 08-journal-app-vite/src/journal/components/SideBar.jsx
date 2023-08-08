import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth }) => {

	const { displayName } = useSelector(state => state.auth )
	const { notes } = useSelector(state => state.journal )
	
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
						notes.map((note, index) => (
							<SideBarItem key={ index } { ...note } />
						))
					}
				</List>
			</Drawer>
		</Box>
	)
}
