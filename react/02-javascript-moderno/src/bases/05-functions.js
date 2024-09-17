// Functions
function saludar(nombre) {
  return `Hola, ${nombre}`
}

// Accidentalmente puedo modificar la funcion, por ej: saludar = 30;

saludar = 30;

console.log(saludar);

// Mejor guardar el valor en constantes