import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData)
    });
    test('Debe de retornar undefine si no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        console.log(heroe);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(undefined)
    })
    test('Debe de retornar los que son de dc', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroe.filter(h => h.owner === owner);
        console.log(heroeData);
        expect(heroe).toEqual(heroeData);

    })
    test('Debe de retornar los que son de marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    })


})
