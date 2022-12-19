

export const TodoItem = ({ id, description, done, onRemoveTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            {/* mark as read: onToggleTodo  */}
            <span onClick={ () => onToggleTodo( id )} className={`align-self-center pointer ${ done ? 'text-decoration-line-through' : '' }`}>{ description }</span>
            {/* Send id to onRemoveTodo  */}
            <button onClick={ () => onRemoveTodo( id ) } className="btn btn-danger">X</button>
        </li>
    )
}
