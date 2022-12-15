import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del poder',
        done: false
    },
]

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (state) => {
        console.log(state)
    }

    return (
        <>
            <h1>Todo App 10, <small>to do: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={ state }/>                 
                </div>
                
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
           
        </>
    )
}
