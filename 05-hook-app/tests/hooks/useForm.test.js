import { renderHook, act } from "@testing-library/react"
import {useForm} from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Alber',
        email: 'alberto.r.caballero.87@google.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function),
            }
        )

    })

    test('debe de cambiar el nombre del formulario', () => {
        const {result} = renderHook(() => useForm(initialForm))

        const newValue = 'Juan'
        
        act(() => {
            result.current.onInputChange({target: {name: 'name', value: newValue}})
        })

        expect(result.current.name).toEqual(newValue)
        expect(result.current.formState.name).toEqual(newValue)

    })

    test('debe realizar el reset del formulario', () => {
        const {result} = renderHook(() => useForm(initialForm))

        const newValue = 'Juan'
        
        act(() => {
            result.current.onInputChange({target: {name: 'name', value: newValue}})
            result.current.onResetForm()
        })

        expect(result.current.name).toEqual(initialForm.name)
        expect(result.current.formState.name).toEqual(initialForm.name)

    })

})