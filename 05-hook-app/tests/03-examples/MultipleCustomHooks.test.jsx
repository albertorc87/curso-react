import {render, screen, fireEvent} from '@testing-library/react'
import {MultipleCustomHooks} from '../../src/03-examples/MultipleCustomHooks'
import { useFetch } from '../../src/hooks/useFectch'
import { useCounter } from '../../src/hooks/useCounter'

jest.mock('../../src/hooks/useFectch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})

        expect(nextButton.disabled).toBeTruthy()

    })

    test('debe de mostrar un Quote', () => {
        
        useFetch.mockReturnValue({
            data: {author: 'Alber', quote: 'Hola bro'},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        
        expect(screen.getByText('Hola bro')).toBeTruthy()
        expect(screen.getByText('Alber')).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})

        expect(nextButton.disabled).toBeFalsy()

    })

    test('debe de llamar a la función de incrementar', () => { 
        

        useFetch.mockReturnValue({
            data: {author: 'Alber', quote: 'Hola bro'},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
    


        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled()
    
    })
})