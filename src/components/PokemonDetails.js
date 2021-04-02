import Pokemon from './Pokemon';
import { useEffect, useState } from 'react'

const PokemonDetails = ({selectedPokemon}) => {
  const [ pokemonInfo, setPokemonInfo ] = useState({});
  useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
    .then(response => response.json())
    .then(results => setPokemonInfo(results))
  });
  return (
  <div>
    <Pokemon pokemonName={selectedPokemon}/>
    <p>{JSON.stringify(pokemonInfo)}</p>
  </div>
  )
};

export default PokemonDetails;
