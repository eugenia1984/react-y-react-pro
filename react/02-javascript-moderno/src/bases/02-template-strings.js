const nombre = 'María Eugenia';
const apellido = 'Costa';

// nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

const getSaludo = (nombre) => {
  return `Hola ${nombre}`
}

getSaludo('Ana');