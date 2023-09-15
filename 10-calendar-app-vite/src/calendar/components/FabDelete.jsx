import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
	const { isDateModalOpen } = useUiStore()
	const { startDeletingEvent, hasEventSelect } = useCalendarStore()

	const handleClickDelete = () => startDeletingEvent();

	return (
		<button 
			className='btn btn-danger rounded-circle fab-danger'
			onClick={ handleClickDelete }
			style={{ display: (hasEventSelect && !isDateModalOpen) ? 'block' : 'none' }}
		>
			<i className='fas fa-trash-alt'></i>
		</button>
	)
}
