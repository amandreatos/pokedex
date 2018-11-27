import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    pokemon: {}
  };

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    const url = "https://pokeapi.co/api/v2/";
    fetch(url + "pokemon/?count=151")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        console.log(JSON.stringify(myJson));
        this.setState({ pokemon: myJson.results });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <section className="pokeList">
          {this.state.pokemon[0] &&
            this.state.pokemon.map((pokemon, index) => {
            return (
              <figure key={index} className="singlePokemon">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                <h4 className="singlePokemon__name">{pokemon.name}</h4>
              </figure>
            )
          })
          }
        </section>
      </div>
    );
  }
}

export default App;
