import './App.css'

function App() {
  // constantes
  const firstName = 'María Eugenia';
  const lastName = 'Costa';
  // Template string
  const fullName = `${firstName} ${lastName}`;
  // Object literal
  const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
      city: 'New York',
      zipCode: 123456,
      lat: 14.234,
      lng: 34.43434
    }
  }
  const person2 = {...person}
  // Arrays
  const array1 = [1, 2, 3, 4];
  const array2 = [...array1, 5];
  // Functions
  const sayHi = (name = '') => `Hi ${name}`

  return (
    <div>
      <section>
        <h2>Template String</h2>
        <p>Hi, I am {fullName}, practising React.</p>
      </section>
      <hr />
      <section>
        <h2>Object literal</h2>
        <p>person.firstName: {person.firstName}</p>
        <p>person.lastName: {person.lastName}</p>
        <p>person.age: {person.age}</p>
        <p>person.address.city: {person.address.city}</p>
        <br />
        <p>person2.firstName: {person2.firstName}</p>
      </section>
      <hr />
      <section>
        <h2>Arrays</h2>
        {array2.map(el => <span key={`elemento-${el}`}> * {el}</span>)}
      </section>
      <hr />
      <section>
        <h2>Functions</h2>
        <p>{sayHi('Euge')}</p>
      </section>
    </div>
  )
}

export default App
