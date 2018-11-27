import React, { Component } from "react";
import "./App.css";
import PokeItem from "./components/PokeItem/PokeItem";
import SinglePokeInfo from "./components/SinglePokeInfo/SinglePokeInfo";
import Loader from "./components/Loader/Loader";
import PokeSidebar from "./components/PokeSidebar/PokeSidebar";

class App extends Component {
  state = {
    pokemon: {},
    currentPokemon: null,
    loading: false,
    singlePokemonLoading: false
  };

  componentDidMount() {
    let cachedPokemon = JSON.parse(localStorage.getItem("allPokemon"));
    if (cachedPokemon) {
      this.setState({ pokemon: cachedPokemon });
    } else {
      this.fetchPokemon();
    }
  }

  fetchPokemon = () => {
    const url = "https://pokeapi.co/api/v2/";
    this.setState({ loading: true });
    fetch(url + "pokemon/?results=151")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        localStorage.setItem("allPokemon", JSON.stringify(myJson.results));
        this.setState({ pokemon: myJson.results, loading: false });
      });
  };

  fetchCachedPokemon = () => {
    let cachedPokemon = JSON.parse(localStorage.getItem("allPokemon"));
    this.setState({ pokemon: cachedPokemon, loading: false });
  };

  fetchSinglePokemon = pokeUrl => {
    this.setState({ singlePokemonLoading: true });
    let url = pokeUrl;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          ...this.state,
          currentPokemon: myJson,
          singlePokemonLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error, singlePokemonLoading: false });
      });
  };

  render() {
    let isOpen = null;
    if (this.state.currentPokemon) {
      isOpen = "isOpen";
    } else {
      isOpen = null;
    }
    return (
      <div className="App">
        <div className="PokeDexWrapper">
          {this.state.loading && <Loader />}
          <div className="pokedex">
            <section className={`pokeList ${isOpen}`}>
              {this.state.pokemon[0] &&
                this.state.pokemon.map((pokemon, index) => {
                  if (index <= 150) {
                    return (
                      <PokeItem
                        key={index}
                        handleClick={this.fetchSinglePokemon}
                        pokemon={pokemon}
                        index={index}
                      />
                    );
                  }
                })}
            </section>
            {this.state.currentPokemon ? (
              <PokeSidebar clearSidebar={() => this.setState({ currentPokemon: null })}>
                {this.state.singlePokemonLoading && <Loader />}
                <SinglePokeInfo pokemon={this.state.currentPokemon} />
              </PokeSidebar>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
