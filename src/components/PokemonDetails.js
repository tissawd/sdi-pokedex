import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";
import Abilities from "./Abilities";

const PokemonDetails = ({ selectedPokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then((response) => response.json())
      .then((results) => setPokemonInfo(results));
  });

  return (
    <div>
      <Pokemon pokemonName={selectedPokemon} />
      <Abilities pokemonInfo={pokemonInfo} />
      {/* <div>{JSON.stringify(pokemonInfo.abilities)}</div> */}
    </div>
  );
};

export default PokemonDetails;
