// Asignación desestructurante
const person = {
  nombre: 'Tony',
  edad: 65,
  clave: 'Ironman',
  latlng: {
    lat: 12.24424,
    lng: -12.123
  }
}

console.log(person.nombre);
console.log(person.edad);
console.log(person.clave);

// Asignación desestructurante
// Podria nombrarlos en otro orden, pero queda mas claro que corresponda el orden a como viene
const { nombre, edad, clave, latlng: {lat, lng} } = person;
// en latlng hago una sub asignacion desestructurante
console.log('nombre: ', nombre, 'edad: ', edad, 'clave: ', clave, 'lat: ', lat, 'lng: ', lng)

// Al desestructurar, puedo usar algunos y no todos los valores, solo los que necesito

// También puedo asignarle un valor por defecto (=) en caso que la propiedad no exista

