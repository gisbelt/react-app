import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'

export const SideBarItem = ({ title, body, id }) => {

	const newTitle = useMemo( () => {
		return title.length > 10
			? title.substring(0,10) + '...'
			: title;
	}, [ title ])

	return (
		<ListItem disablePadding>
			<ListItemButton>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={ newTitle }/>
					<ListItemText secondary={ body }/>
				</Grid>
			</ListItemButton>
		</ListItem>
	)
}
