import {todoReducer} from '../../src/08-useReducer/todoReducer'

describe('Pruebas en todoReducer', () => {
    
    const initialState = [
        {
            id: 1,
            description: 'Demo Todo',
            done: false,
        }
    ]

    test('debe regresar el estado inicial', () => {
        
        const newState = todoReducer(initialState, {})

        expect(newState).toBe(initialState)

    })

    test('debe de agregar un todo', () => {
        
        const action = {
            type: 'add',
            payload: {
                id: 2,
                description: 'Nuevo todo chaico',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)

    })

    test('debe de eliminar un todo', () => {
        
        const action = {
            type: 'delete',
            payload: 1
        }
        
        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(0)



    })

    test('debe realizar el cambio del todo', () => {

        
        const action = {
            type: 'toggle',
            payload: 1
        }
        
        const newState = todoReducer(initialState, action)

        expect(newState[0].done).toBe(true)
        
        const newState2 = todoReducer(newState, action)
        expect(newState2[0].done).toBe(false)
    })

})