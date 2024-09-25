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
console.log(message)