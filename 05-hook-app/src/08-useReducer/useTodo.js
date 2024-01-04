import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"

export const useTodo = () => {

    const handleNewTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }


    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}