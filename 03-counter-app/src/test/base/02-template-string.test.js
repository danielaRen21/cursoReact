import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de treotrnar Hola Daniela', () => {

        const nombre = 'Daniela';

        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre);
    })
    test('Saludo retorna Hola Carlos', () => {
        //getSaludo debe retornar Hola Carlos Si no hay argumento nombre
        const saludo2 = getSaludo();
        console.log(saludo2)
        expect(saludo2).toBe('Hola Carlos');
    })
})
