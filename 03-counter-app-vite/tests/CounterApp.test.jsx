import {fireEvent, render, screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en <CounterApp/>', () => {

    const initialValue = 100

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}/>)
    
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar el valor inicial de 100"', () => {
        const {container} = render(<CounterApp value={initialValue}/>)
    
        const h2 = container.querySelector('h2')

        expect(h2.innerHTML).toBe(String(initialValue)) 
    })

    test('debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue}/>)

        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('101')).toBeTruthy()
    })

    test('debe de decrementar con el botón -1', () => {
        render(<CounterApp value={initialValue}/>)

        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('99')).toBeTruthy()
    })

    test('debe de funcionar el botón de reset', () => {
        render(<CounterApp value={initialValue}/>)

        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        // fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText('100')).toBeTruthy()
    })
})
