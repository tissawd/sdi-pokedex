const Pokemon = ({ pokemonName }) => {
  return (
    <article className="pokemon">
      <h3>{pokemonName}</h3>
      <img
        src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
        alt={`${pokemonName}`}
      />
    </article>
  );
};

export default Pokemon;
