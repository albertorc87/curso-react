import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodo} 
                    onToggleTodo={onToggleTodo} 
                    />
                ))
            }
        </ul>
    )
}
