import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [];
// Initializer: try to parse what is in the LocalStorage
// If it is null, it fetches an empty array 
const init = () => {
    return JSON.parse( localStorage.getItem('Todos') ) || [];
}

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState, init)

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

    return (
        <>
            <h1>Todo App 10, <small className="text-danger">to do: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={ state } onRemoveTodo={ handleDeleteTodo }/>                 
                </div>
                
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleAddTodo }/>
                </div>
            </div>
           
        </>
    )
}
