import { useState, useEffect } from 'react'
import { heroes } from './data/heroes'
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
  const getActiveUser = (firstName) =>  ({ 
    uid: '123456',
    userName: firstName
  })
  const activeUser = getActiveUser('Maria') 
  // Asignación desestructurante
  const person3 = {
    name: 'Tony',
    age: 65,
    password: 'Ironman',
    latlng: {
      lat: 12.1234,
      lng: 13.123
    }
  }
  const { name, age, password, latlng: {lat, lng} } = person3;

  const getHeroById = (heroId) => {
    const {id, name, owner} = heroes.find( hero => hero.id === heroId)
    return `Hero: ${name}, id: ${id}, owner: ${owner}`
  }

  // Fetch API usandola con los estados para mostrar ina imagen
  const [imgUrl, setImgUrl] = useState('');

  const API_KEY = 'cHjKWJE8DGKCmixK8wqjo1Gsa7Sax0MR';
  
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then( (resp) => resp.json())
    .then( ({data}) =>  {
      setImgUrl(data.images.original.url);
    })
    .catch(console.warn);
  }, [])
  

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
        <p>{activeUser.userName}</p>
      </section>
      <hr />
      <section>
        <h2>Destructuring asigment</h2>
        <code>{`person3 = { name: ${name}, age: ${age}, password: ${password}, lat: ${lat}, lng: ${lng} }`}</code>
      </section>
      <hr />
      <section>
        {getHeroById(1)}
      </section>
      <hr />
      <section>
        { imgUrl ? <img src={imgUrl} alt="Random Gif" width={200} /> : <p>Loading</p> }
      </section>
    </div>
  )
}

export default App
