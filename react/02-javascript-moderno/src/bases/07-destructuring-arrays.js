// Asignación destructurante en arrays
const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes);
console.log(personajes[0]); // para el primero

const [, , p3] = personajes; // para el tercer persona
console.log(p3);

const returnArray = () => {
  return "ABC", 123;
};

const [letras, numeros] = returnArray();
console.log(letras, numeros);

// Similar al useState de React
const usesStates = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [name, setName] = usesStates("Goku");
console.log("name: ", name, "setName: ", setName);
