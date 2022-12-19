

export const TodoItem = ({ id, description, done, onRemoveTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ description }</span>
            {/* Send id to onRemoveTodo  */}
            <button onClick={ () => onRemoveTodo( id ) } className="btn btn-danger">X</button>
        </li>
    )
}
