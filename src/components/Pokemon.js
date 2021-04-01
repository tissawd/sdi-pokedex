import { useHistory } from "react-router-dom";

const Pokemon = ({ pokemonName }) => {
  const history = useHistory();

  return (
    <article
      className="pokemon"
      onClick={(event) => {
        history.push(`/details/${pokemonName}`);
      }}
    >
      <h3>{pokemonName}</h3>
      <img
        src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
        alt={`${pokemonName}`}
      />
    </article>
  );
};

export default Pokemon;
