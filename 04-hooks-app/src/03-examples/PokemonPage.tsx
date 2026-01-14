import { useCounter } from "../hooks/useCounter";

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h2 className="text-xl font-bold text-white">#{counter} Bulbasaur</h2>
      <p>Firmness: XX</p>

      <div className="flex gap-6">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={decrement}
        >
          Previous
        </button>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={increment}
        >
          Next
        </button>
      </div>
    </div>
  );
};