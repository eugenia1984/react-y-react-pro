// Functions
function saludar(nombre) {
  return `Hola, ${nombre}`
}

// Accidentalmente puedo modificar la funcion, por ej: saludar = 30;

saludar = 30;

console.log(saludar);

// Mejor guardar el valor en constantes y usar arrow functions
// asi puedo tener:
// - return implícito
// no usar las {} si es un bloque de un solo segmento
// no usar los () si solo tengo un parametro

const saludar2 = (nombre) => `Hola, ${nombre}`

console.log(saludar2('San'));

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi123'
  }
}

console.log(getUser());

// Con los () tengo el return implicito, se usa mucho en React
const getUser2 = () => {
  ({
    uid: 'ABC123',
    username: 'El_Papi123'
  })
}

console.log(getUser2());