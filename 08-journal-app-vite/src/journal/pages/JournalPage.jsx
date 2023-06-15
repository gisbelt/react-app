import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
	return (
		<JournalLayout>
			{/* Nothing selected  */}
			{/* <NothingSelectedView /> */}

			{/* Note View  */}
			<NoteView />
		</JournalLayout>
	)
}
