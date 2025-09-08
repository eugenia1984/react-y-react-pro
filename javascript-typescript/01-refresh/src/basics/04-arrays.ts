/* Arrays */
const myArray : (number)[]= [1, 2, 3, 4, 5, 6, 7, 8];
myArray.push(9);

for(const myNumber of myArray) {
  console.log(myNumber + 10);
}

// Spreed operator para romper la referencia de myArray y no modificarlo también
const myArray2 = [...myArray];
myArray2.push(10);

console.log("myArray: ",myArray);
console.log("myArray2: ", myArray2);

// Para definir el tipo de dato de un array con más de un tipo
const myArrayVary : (number | string) []= [1, '2'];
console.log("myArrayVary - ", myArrayVary);