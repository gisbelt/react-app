import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store';

export const useCalendarStore = () => {
	const dispatch = useDispatch();
	const { events, activeEvent } = useSelector( state => state.calendar )

	const setActiveEvent = ( calendarEvent ) => {
		dispatch( onSetActiveEvent(calendarEvent) )
	}

	const startSavingEvent = ( calendarEvent ) => {
		// TODO: get backend

		// All good
		if( calendarEvent._id ) {
			//updating
		} else {
			//creating
			dispatch( onAddNewEvent({ _id: new Date().getTime(), ...calendarEvent }) )
		}
	}
	
	return {
		// properties
		events,
		activeEvent,

		// methods
		setActiveEvent,
		startSavingEvent,
	}
}
