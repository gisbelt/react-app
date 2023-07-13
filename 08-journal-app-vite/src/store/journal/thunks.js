export const startNewNote = () => {
	return async ( dispatch ) => {
		// uid
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		}

		// dispatch( newNote )
		// dispatch( activeNote )
	}
}