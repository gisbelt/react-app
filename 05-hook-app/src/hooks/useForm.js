import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    // initialForm: which by default will be an object. 
    const [formState, setFormState] = useState( initialForm )

    //change input
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // The property "name" is the one we are going to set for email, and username
        setFormState({
            ...formState,
            [ name ]: value //computed properties
        })
    }

    return {
        ...formState, //part of the object that the useForm is returning so that it can be unstructured.
        formState,
        onInputChange,
    }
}
