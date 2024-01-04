import { useReducer, useEffect } from "react"

const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];
        case 'delete':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return initialState.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo);
        default:
            return initialState;
    }
}

export const useTodos = () => {

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