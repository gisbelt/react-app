import React from 'react'
import { useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

	const { data: todos, error, isLoading } = useGetTodosQuery()

	// console.log(data);
	return (
		<>
			<h1>To-do - RTK Query</h1>
			<hr />
			<h4>IsLoading: { isLoading ? 'True' : 'False' }</h4>

			<pre>...</pre>

			<ul>
				{ todos.map((todo, index) => (
					<li key={ index }>
						<strong>{ todo.completed ? 'DONE ' : 'PENDING ' }</strong>
						{ todo.title }
					</li>
				))}				
			</ul>

			<button>
				Next To-do
			</button>
		</>
	)
}