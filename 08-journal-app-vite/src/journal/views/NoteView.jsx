import { useEffect, useMemo, useRef } from "react"
import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { ImageGallery } from "../components"
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import { Toaster, toast } from 'sonner'

export const NoteView = () => {

	const dispatch = useDispatch();
	const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
	const { body, title, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo( () => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date])

	useEffect(() => {
		dispatch( setActiveNote(formState) );
	}, [formState])

	useEffect(() => {
		if( messageSaved.length > 0 ) {
			toast.success(`${messageSaved}`)
		}
	}, [messageSaved])
	
	const onSaveNote = () => {
		dispatch( startSaveNote() );
	}

	const fileInputRef = useRef()
	const onFileInputChange = ({ target }) => {
		if(target.files === 0) return
		dispatch( startUploadingFiles(target.files) )
	}

	return (
		<Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
			<Toaster position="bottom-right" richColors expand={true} closeButton />

			<Grid item>
				<Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
			</Grid>

			<Grid item>

				<input 
					type="file"
					ref={ fileInputRef }
					multiple
					onChange={ onFileInputChange }
					style={{ display: 'none' }}
				/>
				<IconButton 
					color="primary" disabled={ isSaving }
					onClick={ () => fileInputRef.current.click() }
				>
					<UploadOutlined />
				</IconButton>

				<Button 
					onClick={ onSaveNote }
					disabled={ isSaving }
					color='primary' 
					sx={{ padding: 2 }}
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
					Save
				</Button>
			</Grid>

			<Grid container>
				<TextField 
					type='text'
					variant='filled'
					fullWidth
					placeholder="Add a title"
					label='Title'
					sx={{ border: 'none', mb: 2 }}
					name="title"
					value={ title }
					onChange={ onInputChange }
				/>

				<TextField 
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder="what happened today?"
					sx={{ border: 'none', mb: 2 }}
					minRows={ 5 }
					name="body"
					value={ body }
					onChange={ onInputChange }
				/>
			</Grid>

			{/* Image gallery  */}
			<ImageGallery images={ note.imageUrls } />
		</Grid>
	)
}
