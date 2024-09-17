// Asignación desestructurante
const person = {
  nombre: 'Tony',
  edad: 65,
  clave: 'Ironman'
}

console.log(person.nombre);
console.log(person.edad);
console.log(person.clave);

// Asignación desestructurante
// Podria nombrarlos en otro orden, pero queda mas claro que corresponda el orden a como viene
const { nombre, edad, clave } = person;
console.log('nombre: ', nombre, 'edad: ', edad, 'clave: ', clave)

// Al desestructurar, puedo usar algunos y no todos los valores, solo los que necesito

// También puedo asignarle un valor por defecto (=) en caso que la propiedad no exista

