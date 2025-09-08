/* Object literals */
const ironMan = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: 'ABC123',
    city: 'New York'
  }
};

// Spread operator
// asi rompo la referencia al primer nivel 
// no voy a estar modificando ironMan, sino son variables separadas
// En el ejemplo si se copia el objeto de address
const spiderMan = {...ironMan};
spiderMan.firstName = "Peter";
spiderMan.lastName = "Parker";
spiderMan.age = 22;

// para que no pase lo de address es mejor utilizar structuredClone()
// Haceoms un clone profundo, rompe la referencia en todos los niveles
const spiderMan2 = structuredClone(ironMan);
spiderMan2.firstName = "Peter";
spiderMan2.lastName = "Parker";
spiderMan2.age = 32;
spiderMan2.address.city = "San Jose";

console.log('ironMan: ', ironMan, 'spiderMan: ', spiderMan, 'spiderMan2: ', spiderMan2);
