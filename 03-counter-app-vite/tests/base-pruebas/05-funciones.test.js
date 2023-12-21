import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        // 1. Inicialización
        const user = getUser()

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        expect(testUser).toStrictEqual(user)

    })
    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Alber'

        const user = getUsuarioActivo(nombre)

        const usuarioActivo = {
            uid: 'ABC567',
            username: nombre
        }

        expect(usuarioActivo).toStrictEqual(user)

    })
})
