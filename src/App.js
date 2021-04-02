import "./App.css";
import { Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import { useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Route exact path="/">
          <PokemonList
            selected={selectedPokemon}
            setSelected={setSelectedPokemon}
          />
        </Route>
        <Route exact path="/about">
          <h1>Created by Nick and Derek</h1>
        </Route>
        <Route path="/details">
          <PokemonDetails selectedPokemon={selectedPokemon} />
        </Route>
      </main>
    </div>
  );
}

export default App;
