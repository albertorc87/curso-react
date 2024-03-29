import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../../src/router/PrivateRoute"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter } from "react-router-dom"

describe('Testing del PrivateRoute', () => {

    test('Si estoy autenticado debe de mostrar el children', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                name: 'Harry',
                id: '1111'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')

    })

})