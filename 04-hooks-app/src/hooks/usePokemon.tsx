import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  firmness: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemonById = async(id: number) => {
    const response = await fetch('https://pokeapi.co/api/v2/berry/1');
    const data = await response.json();

    setPokemon({
      id: id,
      name: data.name,
      firmness: data.firmness.name,
    })
  }
  
  useEffect( () => {
    getPokemonById(id);
  }, [id])

  return (
    // Properties
    pokemon
  )
}
