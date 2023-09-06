import { Calendar } from 'react-big-calendar'
import { localizer, getMessagesES } from '../../helpers'
import { addHours } from 'date-fns'
import { CalendarEventBox, Navbar } from '../'
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

	const eventStyleGetter = ( event, start, end, isSelected ) => {
		const style = {
			backgroundColor: '#347C99',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
		}
		
		return { style }
	}
	
	return (
		<>
			<Navbar />

			<Calendar
				culture='es'
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 'calc(100vh - 56px - 1.5rem)' }}
				messages={getMessagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEventBox
				}}
			/>
		</>
	)
}
