import { heroes } from '../data/heroes'

// .find() -> devuelve el primero que encuentra que cumple la condicion
const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);
console.log(getHeroeById(1));

// .filter() -> devuelve todos los que cumplan con la condicion
const getHeroesByOwner = ( owner ) => heroes.filter((hero) => hero.owner === owner)
console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));