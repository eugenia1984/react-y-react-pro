import type { CSSProperties } from "react";

interface Address {
  zipCode: string,
  country: string
}

// Al ser constantes que nunca van a cambiar, se pueden dejar fuera del componente
// asi no forman parte del ciclo de renderizado del componente
const firstName: string = 'María Eugenia';
const lastName: string = 'Costa';
const favoriteGames: string[] = ['puzzles', 'mandalas'];
const isActive: boolean = true;
const address: Address = {
  zipCode: 'ABD-123',
  country: 'Spain'
}

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: isActive ? 12 : 8,
  padding: 8
}

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{lastName}</h1>
      <h2>{firstName}</h2>
      <p>{favoriteGames.join(', ')}</p>
      <p>{isActive ? 'Active' : 'Not  active'}</p>
      <p style={myStyles}> {JSON.stringify(address)} </p>
    </>
  )
}