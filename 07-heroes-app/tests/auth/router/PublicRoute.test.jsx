import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../../src/router/PublicRoute"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { Route, Routes } from "react-router"

describe('Testing del PublicRoute', () => {

    test('Si no estoy autenticado debe de mostrar el children', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta pública')).toBeTruthy()

    })

    test('Si estoy autenticado debe de navegar a marvel', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Harry',
                id: '1111'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='/login' element={<h1>Página login</h1>}></Route>
                        <Route path='/marvel' element={<h1>Página Marvel</h1>}></Route>
                    </Routes>
                    <PublicRoute>
                        <h1>Ruta pública</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Página Marvel')).toBeTruthy()

    })
})