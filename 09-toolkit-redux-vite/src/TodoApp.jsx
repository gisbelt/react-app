import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

	const [todoId, setTodoId] = useState(1)

	// const { data: todos = [], error, isLoading } = useGetTodosQuery()
	const { data: todo = [], isLoading } = useGetTodoByIdQuery( todoId )
	
	const prevTodo = () => {
		if (todoId === 1 ) return;
		setTodoId( todoId - 1 );
	}

	const nextTodo = () => {
		setTodoId( todoId + 1 )
	}

	return (
		<>
			<h1>To-do - RTK Query</h1>
			<hr />
			<h4>IsLoading: { isLoading ? 'True' : 'False' }</h4>

			<pre>{ JSON.stringify(todo, null, 2) }</pre>

			{/* <ul>
				{ todos.map((todo, index) => (
					<li key={ index }>
						<strong>{ todo.completed ? 'DONE ' : 'PENDING ' }</strong>
						{ todo.title }
					</li>
				))}				
			</ul> */}

			<button onClick={ prevTodo }>
				Prev To-do
			</button>

			<button onClick={ nextTodo }>
				Next To-do
			</button>
		</>
	)
}