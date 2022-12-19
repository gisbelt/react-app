import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onRemoveTodo }) => {
    return (
        <>
            <ul className="list-group">
                {
                    todos.map( (todo) => (
                        <TodoItem key={ todo.id } { ...todo } onRemoveTodo={ onRemoveTodo }/>
                    ))
                }  
            </ul>
        </>
    )
}
