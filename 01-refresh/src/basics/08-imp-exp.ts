import { heroes, Owner, type Hero } from "./data/heroes";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id);

  // Un modo de evitar el return de un posible undefined

  // if( ! hero) {
  //  throw new Error(`No existe un heroe con el id: ${id}`)
  // }

  return hero;
};

/**
 *  getHeroesByOwner => Hero[]
 *  Filter heroes by their owner
 * @param owner - the owner of the hero (DC or Marvel)
 * @returns Array de heroes pertenecientes al propietario
 */

// Teniendo esta funcion que es mas facil de leer
export const getHeroesByOwner = (owner: Owner): Hero[] => {
  let heroesByOwner: Hero[] = heroes.filter((hero) => hero.owner === owner);

  return heroesByOwner;
};

// O esta otra mas resumida:

// const getHeroesByOwner = (owner: Owner): Hero[] =>
//   heroes.filter((hero) => hero.owner === owner);

console.log("getHeroById(1): ", getHeroById(1));
console.log("getHeroById(2): ", getHeroById(2));
