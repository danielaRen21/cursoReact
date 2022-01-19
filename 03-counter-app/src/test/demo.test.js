
describe('pruebas en el archivo demo.test.js', () => {
    test('Deben de ser iguales los strings', () => {

        //Inicializacion
        const mensaje = 'Hola Mundo';
        //Estimulo
        const mensaje2 = `Hola Mundo`;
        //Observa el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
});



