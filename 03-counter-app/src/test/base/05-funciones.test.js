import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('pruebas05-Funciones', () => {

    test('Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user)
        expect(user).toEqual(userTest)

    })
    //get userActivo debe de retornar un objeto
    test('usiarioActivo debe de retornar un objeto', () => {
        const activoTest = {
            uid: 'ABC567',
            username: 'Daniela'
        }

        const activo = getUsuarioActivo();
        console.log(activo);
        expect(activo).toEqual(activoTest);
    })


})
