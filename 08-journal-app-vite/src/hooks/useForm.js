import { useEffect, useMemo, useRef, useState } from "react";

export const useForm = ( initialForm = {}, formValidations = {} ) => {
    
    // initialForm: which by default will be an object. 
    const [formState, setFormState] = useState( initialForm )
    const [formValidation, setFormValidation] = useState({})
    const inputRef = useRef();

    const createValidators = () => {
        const formCheckedValues = {};
        // We sweep each key from formValidations, each property name
        for (const formField of Object.keys( formValidations )) {
            // the function and error message that each property of the formValidations has in the formField position
            const [ fn, errorMessage ] = formValidations[formField];
            // Remember that the function (fn) must be given the value of each input as parameter 
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    }

    useEffect(() => {
        createValidators();       
    }, [formState])

    useEffect(() => {
        setFormState( initialForm );       
    }, [initialForm])

    // We will store the value y that value should change only if the formValidation changes. 
    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys( formValidation )) {
            // We return false so that the for loop does not continue executing. 
            if( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [formValidation])

    //change input
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // The property "name" is the one we are going to set for email, and username
        setFormState({
            ...formState,
            [ name ]: value //computed properties
        })
    }

    //reset form
    const onResetForm = () => {
        setFormState( initialForm )
        inputRef.current.focus();
    }
    
    return {
        ...formState, //part of the object that the useForm is returning so that it can be unstructured.
        formState,
        onInputChange,
        onResetForm,
        inputRef,

        ...formValidation,
        isFormValid
    }
}
