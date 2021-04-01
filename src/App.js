import "./App.css";
import { Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Route exact path="/home">
          <PokemonList />
        </Route>
        <Route exact path="/about">
          <h1>Created by Nick and Derek</h1>
        </Route>
      </main>
    </div>
  );
}

export default App;
