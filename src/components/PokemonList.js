import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";

const PokemonList = () => {
  const [pokeListState, setPokeListState] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((result) => {
        setPokeListState(result.results);
      });
  }, []);

  return (
    <>
      <Route exact path="/home">
        <div className="pokemon-list">
          {pokeListState.map((pokemon) => (
            <Pokemon pokemonName={pokemon.name} />
          ))}
        </div>
      </Route>
      <Route exact path="/home/details">
        <div>
          <PokemonDetails />
        </div>
      </Route>
    </>
  );
};

export default PokemonList;
