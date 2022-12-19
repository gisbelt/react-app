import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { state, stateCount, pendingTodosCount, handleAddTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>Todo App {stateCount}, <small className="text-danger">to do: {pendingTodosCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={ state } onRemoveTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }/>                 
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
