import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styled from "styled-components";

const PokemonListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 5px;
`;

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
    <PokemonListStyle>
      {pokeListState.map((pokemon) => (
        <Pokemon
          pokemonName={pokemon.name}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </PokemonListStyle>
  );
};

export default PokemonList;
