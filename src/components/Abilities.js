

const Abilities = ({pokemonInfo}) => {

  return (
    <div className="pokemon-details">
      <section className="stats">
        <article><h4>Height: </h4> {pokemonInfo.height} </article>  
        <article><h4>Weight: </h4> {pokemonInfo.weight} </article> 
        <article><h4>ID: </h4> {pokemonInfo.id} </article> 
        <article><h4>Types: </h4> {Array.isArray(pokemonInfo.types) ? <ul>{pokemonInfo.types.map(type => <li>{type.type.name}</li>)}</ul> : "loading..."} </article> 
      </section>
      <section className="abilities">
        {Array.isArray(pokemonInfo.abilities) ?
        <ul>
          <h3>Abilities</h3>
          {pokemonInfo.abilities.map(ability => {
            return (
              <li>
                {ability.ability.name}
              </li>
            )
          })}
          </ul> :
          <p>loading...</p>
        }
      </section>

      {/* {console.log(Array.isArray(abilities))} */}
    </div>
  )
}


export default Abilities;