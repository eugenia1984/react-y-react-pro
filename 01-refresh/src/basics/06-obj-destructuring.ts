/* Destructuring */
// Desarmar un objeto y extraer sus propiedades
const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

// Si hacemos desestructuración, se hace todo junto
const { name, age, key } = person;

console.log({ name, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ name, age, key, rank = "sin rango" }: Hero) => {
  return {
    keyName: key,
    // como la variable y la property tienen el mismo nombre no repito name: name, sino: name
    user: {
      name,
      age,
    },
    rank: rank,
  };
};

const context = useContext(person);
console.log("context - ", context);

const userAge2 = context.user.age;
const userName2 = context.user.name;
console.log("userAge: ", userAge2, ", userName: ", userName2);

const {
  rank,
  keyName,
  user: { name: userName, age: ageName },
} = useContext(person);
console.log({ rank, keyName });

// Otro modo más legible es desestructurar doble
const { rank: rank2, keyName: keyName2, user: user2 } = useContext(person);
const { name: name2, age: age2 } = user2;
console.log(rank2, keyName2, user2, name2, age2);
