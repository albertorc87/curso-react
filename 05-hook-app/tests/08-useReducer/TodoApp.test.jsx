import { render, screen } from "@testing-library/react"
import {TodoApp} from '../../src/08-useReducer/TodoApp'
import { useTodo } from "../../src/08-useReducer/useTodo"

jest.mock("../../src/08-useReducer/useTodo")

describe('Pruebas en <TodoApp', () => {

    useTodo.mockReturnValue(
        {
            todos: [
                {id: 1, description: 'chaico 1', done: false},
                {id: 2, description: 'chaico 2', done: false},
            ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            handleNewTodo: jest.fn(),
        }
    )
    
    test('Debe de mostrar el componente correctamente', () => {
        
        render(<TodoApp/>)

        expect(screen.getByText('chaico 1')).toBeTruthy()
        expect(screen.getByText('chaico 2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    })
})