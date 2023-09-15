import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { localizer, getMessagesES } from '../../helpers'
import { CalendarEventBox, CalendarModal, Navbar } from '../'
import { useUiStore, useCalendarStore } from '../../hooks'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const CalendarPage = () => {
	const { openDateModal } = useUiStore()
	const { events, setActiveEvent } = useCalendarStore()
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
		// console.log({ doubleClick: event });
		openDateModal()
	}

	const onSelected = ( event ) => {
		// console.log({ click: event });
		setActiveEvent( event )
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
