import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({ selected, setSelected }) => {
  const [pokeListState, setPokeListState] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((result) => {
        setPokeListState(result.results);
      });
  }, []);

  return (
    <div className="pokemon-list">
      {pokeListState.map((pokemon) => (
        <Pokemon
          pokemonName={pokemon.name}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default PokemonList;
