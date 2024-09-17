import { heroes } from '../data/heroes'

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

// Las promesas son asincronas
// Primero se ejecuta todo lo síncrono y luego las Promises que son asíncronas

// Se crean con un callback con 2 argumentos: res, rej
// res: resolve, se ejecuta cuando la promesa es exitosa, se cumple
// rej: reject, se ejecuta cuando la promesa falla
const promesa = new Promise((resolve, reject) => {
  
  setTimeout( () => {
    const hero = getHeroeById(2);
    resolve(hero);
    reject('No hero was founded');
  }, 2000)
});

// .then() -> la promesa se ejecuto correctamente
// .catch -> para atrapar el error del reject, se maneja la excepcion
// finally -> se ejecuta siempre
promesa.then( ( hero ) => {
  console.log('hero: ', hero)
})
.catch(err => console.warn(err))

const getHeroByIdAsync = ( id ) => {
  return new Promise((resolve, reject) => {
  
    setTimeout( () => {
      const hero = getHeroeById(id);
      
      if(hero) {
        resolve(hero);
      } else {
        reject('No hero was founded');
      }
      
    }, 2000)
  });
}

getHeroByIdAsync(4)
  .then( console.log)
  .catch( console.warn)

// getHeroByIdAsync(4)
//  .then( hero => console.log('hero: ', hero))
//   .catch( err => console.warn(err))