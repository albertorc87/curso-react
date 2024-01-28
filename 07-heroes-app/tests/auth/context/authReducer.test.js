import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"


describe('first', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})

        expect(state).toEqual({logged: false})
    })
    test('debe llamar el login de authenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Alber',
                id: '123'
            }
        }
        const state = authReducer({logged: false}, action)

        expect(state).toEqual(
            {
                logged: true,
                user: {
                    name: 'Alber',
                    id: '123'
                }
            }
        )
    })
    test('debe borrar el name del usuario y logged a false', () => {
        
        const actionLogin = {
            type: types.login,
            payload: {
                name: 'Alber',
                id: '123'
            }
        }
        const loginState = authReducer({logged: false}, actionLogin)

        const actionLogout = {
            type: types.logout
        }

        const logoutState = authReducer(loginState, actionLogout)

        expect(logoutState).toEqual({logged: false})
    })
})