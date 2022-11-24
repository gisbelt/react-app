import { useState } from "react"
import PropTypes from "prop-types";

// export const AddCategory = ( {setCategories} ) => {
export const AddCategory = ( {onNewValue} ) => {

    const [inputValue, setInputValue] = useState('')
    // function to change the input value
    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onSubmit = ( event ) => {
        // prevent the browser from refreshing when pressing enter
        event.preventDefault();
        // validate that the input is not empty.
        if ( inputValue.trim().length <= 1 ) return;               
        // send new value through props
        onNewValue( inputValue.trim() )
        // clean the input
        setInputValue('')
    }

    return (
        
        <form onSubmit={ (event) => onSubmit(event) } aria-label='form'>
            <input 
                type="text"
                placeholder="search gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}