import { addHours, differenceInSeconds } from 'date-fns';
import { useMemo, useState } from 'react';
import Swal from 'sweetalert2'
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import 'sweetalert2/dist/sweetalert2.min.css'

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
	const [isOpen, setIsOpen] = useState(true)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [formValues, setFormValues] = useState({
		title: '',
		notes: '',
		start: new Date(),
		end: addHours(new Date(), 2),
	})

	const titleClass = useMemo(() => {
		if( !formSubmitted ) return '';

		return (formValues.title.length > 0 )
			? ''
			: 'is-invalid'

	}, [formValues.title, formSubmitted])

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

	const onSubmit = (e) => {
		e.preventDefault()
		setFormSubmitted(true)
		
		const difference = differenceInSeconds( formValues.end, formValues.start )
		if( isNaN( difference ) || difference <= 0 ) {
			Swal.fire('Incorrect dates', 'Check the dates entered', 'error')
			return;
		}

		if( formValues.title.trim().length <= 0 ) return;

		console.log(formValues);

		//Cerrar modal
		//remover errores en pantalla
	}

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
			<form className="container" onSubmit={ onSubmit }>

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
						className={`form-control mt-2 ${titleClass}`}
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
