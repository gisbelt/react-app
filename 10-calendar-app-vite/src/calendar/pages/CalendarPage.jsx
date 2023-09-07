import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { localizer, getMessagesES } from '../../helpers'
import { addHours } from 'date-fns'
import { CalendarEventBox, CalendarModal, Navbar } from '../'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const events = [{
	title: 'Birdthday',
	notes: 'Buy cookies',
	start: new Date(),
	end: addHours( new Date(), 2),
	bgColor: '#fafafa',
	user: {
		_id: '123',
		name: 'Gisbel'
	}
}]

export const CalendarPage = () => {
	const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

	const eventStyleGetter = ( event, start, end, isSelected ) => {
		const style = {
			backgroundColor: '#347C99',
			borderRadius: '0px',
			opacity: 0.7,
			color: 'white',
		}
		
		return { style }
	}

	const onDoubleClick = ( event ) => {
		console.log({ doubleClick: event });
	}

	const onSelected = ( event ) => {
		console.log({ click: event });
	}

	const onViewChanged = ( event ) => {
		localStorage.setItem('lastView', event)
	}
	
	return (
		<>
			<Navbar />

			<Calendar
				culture='es'
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 'calc(100vh - 56px - 1.5rem)' }}
				messages={getMessagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEventBox
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelected}
				onView={onViewChanged}
			/>

			<CalendarModal />
		</>
	)
}
