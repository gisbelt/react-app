import { addHours } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es)

const customStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
	const [formValues, setFormValues] = useState({
		title: '',
		notes: '',
		start: new Date(),
		end: addHours(new Date(), 2),
	})

	const onInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value
		})
	}

	const onDateChange = ( event, changing ) => {
		setFormValues({
			...formValues,
			[changing]: event
		})
	}

	const [isOpen, setIsOpen] = useState(true)
	const onCloseModal = () => {
		setIsOpen(false)
	}

	return (
		<Modal 
			isOpen={ isOpen }
			onRequestClose={ onCloseModal }
			style={ customStyles}
			className='modal'
			overlayClassName="bg-modal"
			closeTimeoutMS={ 200 }
		>
			<h1 className='p-2'> Nuevo evento </h1>
			<hr />
			<form className="container">

				<div className="form-group mb-2 fw-semibold">
					<label>Fecha y Hora de inicio</label>
					<DatePicker 
						className="form-control mt-2" 
						placeholder="Fecha inicio" 
						selected={ formValues.start }
						onChange={ (date) => onDateChange(date, 'start') }
						dateFormat='Pp'
						showTimeSelect
						locale="es"
						timeCaption='Hora'
					/>
				</div>

				<div className="form-group mb-2 fw-semibold">
					<label>Fecha y Hora final</label>
					<DatePicker 
						className="form-control mt-2" 
						placeholder="Fecha final" 
						selected={ formValues.end }
						onChange={ (event) => onDateChange(event, 'end') }
						dateFormat='Pp'
						showTimeSelect
						locale="es"
						timeCaption='Hora'
						minDate={ formValues.start }						
					/>
				</div>

				<hr />
				<div className="form-group mb-2 fw-semibold">
					<label>Título y Notas</label>
					<input 
						type="text" 
						className="form-control mt-2"
						placeholder="Título del evento"
						name="title"
						value={ formValues.title }
						onChange={ onInputChange }
						autoComplete="off"
					/>
				</div>

				<div className="form-group mb-2">
					<textarea 
						type="text" 
						className="form-control mt-2"
						placeholder="Notas"
						rows="5"
						name="notes"
						value={ formValues.notes }
						onChange={ onInputChange }
					></textarea>
					<small id="emailHelp" className="form-text text-muted ms-1">Información adicional</small>
				</div>

				<button
					type="submit"
					className="btn btn-outline-primary btn-block mt-2"
				>
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>

			</form>
		</Modal>
	)
}
