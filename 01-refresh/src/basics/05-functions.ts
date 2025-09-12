/* Functions */
function greet(name: string): string {
  return `Hi ${name}`;
}

// Arrow functions
const greetArrow = (name: string): string => `Hi ${name}`;

const message = greet("Maria");
const message2 = greetArrow("Eugenia");

console.log(message, message2);

function getUser() {
  return {
    uid: "ABC_123",
    username: "El_Papi123",
  };
}

interface User {
  uid: string;
  username: string;
}

// Cuando al return lo pongo entre () es un return implicito
const getUserArrow = (): User => ({
  uid: "ABC-123",
  username: "El-papi123",
});

const user = getUser();
const userArrow = getUserArrow();

console.log(user, userArrow);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function(value) {
//  console.log({value})
// })

// Esta función pasada a arrow function:
myNumbers.forEach((value) => console.log({ value }));

// En realidad ademas del valor, al ser forEach puedo usar el index y el mismo array
myNumbers.forEach((value, index, arr) => console.log('value: ',value,', index: ', index,' of: ', arr));

// Cuando el argumento se envia como referencia a otra función,
// se envia directamente la función como referencia
myNumbers.forEach(console.log)
