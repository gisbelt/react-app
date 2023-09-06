import React from 'react'

export const CalendarEventBox = ({ event }) => {
	const { title, user, notes, end, start } = event;
	return (
		<>
			<p className='m-0'><strong>{ title }</strong></p>
			<p className='m-0'>{ notes }</p>
			<p className='m-0'>Name: { user.name }</p>
		</>
	)
}
