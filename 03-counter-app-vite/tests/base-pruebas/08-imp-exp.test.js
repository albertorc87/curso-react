import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por id', () => {

        const id = 1

        const heroe = getHeroeById(id)

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
        
    })
    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100

        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
        // expect(heroe).toBeFalsy()
        
    })
    test('getHeroesByOwner debe retornar los heroes de DC', () => {

        const id = 100

        const heroes = getHeroesByOwner('DC')

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(
            [
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
                {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                },
                {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                }
            ]
            )
        
    })
    test('getHeroesByOwner debe retornar los heroes de Marvel', () => {

        const id = 100

        const heroes = getHeroesByOwner('Marvel')

        expect(heroes.length).toBe(2)
        
    })
})
