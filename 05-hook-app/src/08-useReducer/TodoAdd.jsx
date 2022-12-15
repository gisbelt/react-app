import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    //Custom Hook
    const { formState, onInputChange, onResetForm, inputRef, item } = useForm({
        item: '',
    })

    const onSubmit = ( event ) => {
        // prevent the browser from refreshing when pressing enter
        event.preventDefault();
        // validate that the input is not empty.
        if ( item.trim().length <= 1 ) return;               
        // send new value through props
        onNewTodo(
            {
                id: new Date().getTime(),
                description: item.trim(),
                done: false
            }
        )
        // clean the input
        onResetForm()
    }

    return (
        <>
            <form onSubmit={ (event) => onSubmit(event) } aria-label='form'>
                <input 
                    ref={ inputRef }
                    type="text"  
                    placeholder="What to do?"
                    className="form-control"
                    name="item"
                    value={ item }
                    onChange={ onInputChange }
                />
                <button type="submit" className="btn btn-outline-primary mt-2">Add</button>
            </form>
        </>
    )
}
