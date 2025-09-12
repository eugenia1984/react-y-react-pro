/* array destructuring */
const characterNames: string[] = ["Goku", "Vegeta", "Trucks"];

const [p1, p2, p3] = characterNames;
console.log({ p1, p2, p3 });

const [, vegeta] = characterNames;
console.log(vegeta);

const [, , trucks] = characterNames;
console.log(trucks);

// Solo si SIEMPRE regresa string, number
const returnArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArrayFn();
console.log({ letters, numbers });

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
  ]  as const;
};

const [name, setName ] = useState('Goku');
console.log(name);
setName('Vegeta');
