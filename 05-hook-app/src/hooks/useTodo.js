import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
// Initializer: try to parse what is in the LocalStorage
// If it is null, it fetches an empty array 
const init = () => {
    return JSON.parse( localStorage.getItem('Todos') ) || [];
}

export const useTodo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState, init)

    // Total of all 
    const stateCount = state.length;
    // Pending to be marked 
    const pendingTodosCount= state.filter(todo => !todo.done).length;

    // Save and read Todos in LocalStorage 
    useEffect(() => {
      localStorage.setItem('Todos', JSON.stringify( state ))
    }, [state])
    
    // Add new Todo
    const handleAddTodo = ( todo ) => {
        const actionAdd = {
            type: 'Add Todo',
            payload: todo,
        }
        dispatch( actionAdd );
    }

    // Remove Todo
    const handleDeleteTodo = ( id ) => {
        const actionDelete = {
            type: 'Remove Todo',
            payload: id,
        } 
        dispatch( actionDelete );
    }

    // Mark as read
    const handleToggleTodo = ( id ) => {
        const actionToggle = {
            type: 'Toggle Todo',
            payload: id,
        } 
        dispatch( actionToggle );
    }

    return {
        state,
        stateCount,
        pendingTodosCount,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}