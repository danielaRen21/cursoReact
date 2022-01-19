//import { heroes } from './data/heroes'
//import { heroes } from './data/heroes'

import { heroes } from "../data/heroes";

//import heroes, { owners } from "./data/heroes"; //por exportacion por defecto


//console.log(owners)

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
export { getHeroeById };
//console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));