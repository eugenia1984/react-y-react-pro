// Array

// Arreglo literal -> ya no se suele usar
const arreglo = new Array();
console.log('arreglo', arreglo);

// De este modo si se crea
const arreglo2 = [];
// OJO: con .push() modificamos el arreglo principal -> no recomendable
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
console.log(arreglo2); // [1, 2, 3]

// En vez de el push usamos el spread
let arreglo3 = [...arreglo2, 4];
console.log(arreglo3);