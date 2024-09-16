/* Object literal */
// key: value
const person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zipCode: 123456,
    lat: 14.234,
    lng: 34.43434
  }
}

console.log('first name: ', person.firstName);
console.log('city: ', person.address.city);

// Se hace la copia de la referencia -> NO HACER
const person2 = person;
// Va a cambiar el firstName de person también
person2.firstName = 'Peter';

// por eso en React no se puede modificar el estado, no se hace un clone, se apunta al nuevo espacio de memoria
// O se usa el spread operator (...person)