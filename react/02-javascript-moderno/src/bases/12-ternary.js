const isActive = true;

// Forma larga con if - else
/*
let message = '';

if(isActive) {
  message = 'Active';
} else {
  message = 'Inactive';
}
*/

// Forma corta con ternario
const message = isActive ? 'Active' : 'Inactive';
console.log(message);

// Forma mas corta, si no quiero tener el else, quiero solo la condicion
// Es la forma corta dle if
// se usa en React para renderizar algo si se cumple la condicion y sino no se ejecuta nada
const message2 = isActive && 'Active';
console.log(message2)