import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { Navbar } from '../'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
	'en-US': enUS,
}

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
})

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
	return (
		<>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 'calc(100vh - 56px - 1.5rem)' }}
			/>
		</>
	)
}
