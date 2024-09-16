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

// método .map() de los arrays
// Va a iterar por cada elemento del array
// Crea un nuevo array, rompe la referencia

// Como ejemplo, me creo un nuevo array que va a tener el doble del valor de los elementos, tiene un return implicito
const arreglo4 = arreglo3.map(element => element*2);
console.log(arreglo4);