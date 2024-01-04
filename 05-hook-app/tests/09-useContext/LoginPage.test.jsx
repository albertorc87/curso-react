import { render, screen, fireEvent } from "@testing-library/react"
import {LoginPage} from '../../src/09-useContext/LoginPage'
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en LoginPage', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('debe de llamar el setUser cuando se haga click', () => {

        const user = {
            id: 123,
            name: 'Alber',
            email: 'alberto.r.caballero.87@gmail.com'
        }

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );



        expect(setUserMock).toHaveBeenCalledWith(user)

    })

})