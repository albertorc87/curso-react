
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
        >
            <span 
            className={`algign-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
            onClick={() => onToggleTodo(todo.id)}
            >
                {todo.desc}
            </span>
            <button
            className="btn btn-danger"
            onClick={() => onDeleteTodo(todo.id)}
            >Borrar</button>
        </li>
    )
}
