import { fireEvent, render, screen } from "@testing-library/react"
import {TodoItem} from '../../src/08-useReducer/TodoItem'


describe('Pruebas en el <TodoItem/>', () => {
    
    const todo = {
        id: 1,
        description: 'Vamos a vendimiar',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el Todo Pendiente de completar', () => {
        
        render(
        <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toBe('algign-self-center ')

    })

    test('debe de mostrar el Todo completado', () => {
        
        todo.done = true

        render(
        <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toBe('algign-self-center text-decoration-line-through')

    })

    test('span debe de llamar el ToggleTodoCuando se hace click', () => {
        
        render(
        <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
        
    })

    test('span debe de llamar el deleteTodo', () => {
        
        render(
        <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        )

        const deleteButton = screen.getByLabelText('delete-todo')
        fireEvent.click(deleteButton)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
        
    })
})