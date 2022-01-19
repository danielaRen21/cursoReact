import { retornaArreglo } from "../../base/07-deses-arr"

describe('Prueba 07-deses-arr', () => {
    test('debe de retornar un string y un numero', () => {
        const arr = retornaArreglo();
        expect(arr).toEqual(['ABC', 123])

    })


})
