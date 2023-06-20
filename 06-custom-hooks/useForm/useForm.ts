import { useState } from "react";

type FormFields = {
	[key: string]: string;
}

type FormErrors = {
	[key: string]: string;
}

type UseForm = {
	formState: FormFields;
	formErrors: FormErrors;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onInputBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onResetForm: () => void;
}

export const useForm = (initialForm: FormFields = {}): UseForm => {
	const [formState, setFormState] = useState<FormFields>(initialForm);
	const [formErrors, setFormErrors] = useState<FormErrors>(initialForm);

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
		formErrors[name] && setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clears error message
	};

	const onInputBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		(value.trim() === '') && setFormErrors((prevErrors) => ({ ...prevErrors, [name]: `Please enter ${name}` })); // Add error message
	};

	const onResetForm = (): void => setFormState(initialForm);

	return {
		formState,
		onInputChange,
		onInputBlur,
		formErrors,
		onResetForm,
	};
};