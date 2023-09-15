import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

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
			dispatch( onUpdateEvent( {...calendarEvent} ));
		} else {
			//creating
			dispatch( onAddNewEvent({ _id: new Date().getTime(), ...calendarEvent }) )
		}
	}

	const startDeletingEvent = () => {
		//TODO: get backend
		dispatch( onDeleteEvent() );
	}

	return {
		// properties
		events,
		activeEvent,
		hasEventSelect: !!activeEvent,

		// methods
		setActiveEvent,
		startSavingEvent,
		startDeletingEvent,
	}
}
