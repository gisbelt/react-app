import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'

export const JournalPage = () => {
	return (
		<JournalLayout>
			{/* Nothing selected  */}
			<NothingSelectedView />

			{/* Note View  */}
		</JournalLayout>
	)
}
