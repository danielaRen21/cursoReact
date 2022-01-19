import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe: ', heroe);
// })
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar al heroe');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);