import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
    test('debe hacer match con el snapshot', () => {
        const title = "Vamos a generar billetes ostias"
        const {container} = render(<FirstApp title={title}/>)
    
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar el titulo en el h1', () => {
        const title = "Vamos a generar billetes ostias"
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)
    
        expect(getByText(title)).toBeTruthy()
        expect(getByTestId('test-title')).toBeTruthy()

        // const h1 = container.querySelector('h1')

        // expect(h1.innerHTML).toBe(title)        
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = "Vamos a generar billetes ostias"
        const subTitle = "Soy un subtitulo"
        const {
            getAllByText
        } = render(<FirstApp 
            title={title}
            subTitle={subTitle}
            />)
    
        expect(getAllByText(subTitle).length).toBe(2)

        // const h1 = container.querySelector('h1')

        // expect(h1.innerHTML).toBe(title)        
    })
})
