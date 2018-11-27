import React, { Component } from "react";
import "./App.css";
import PokeItem from "./components/PokeItem/PokeItem";
import SinglePokeInfo from "./components/SinglePokeInfo/SinglePokeInfo";

class App extends Component {
  state = {
    pokemon: {},
    currentPokemon: null,
    loading: false,
  };

  componentDidMount() {
    let cachedPokemon = JSON.parse(localStorage.getItem("allPokemon"));
    if (cachedPokemon) {
      this.setState({pokemon: cachedPokemon});
    } else {
      this.fetchPokemon();
    }
  }

  fetchPokemon = () => {
    const url = "https://pokeapi.co/api/v2/";
    this.setState({loading: true})
    fetch(url + "pokemon/?results=151")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        localStorage.setItem("allPokemon", JSON.stringify(myJson.results));
        this.setState({ pokemon: myJson.results, loading: false });
      });
  }

  fetchSinglePokemon = (pokeUrl) => {
    console.log('fired')
    let url = pokeUrl;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ currentPokemon: myJson.results });
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error})
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <section className="pokeList">
          {this.state.pokemon[0] &&
            this.state.pokemon.map((pokemon, index) => {
            return <PokeItem key={index} onClick={() => this.fetchSinglePokemon(pokemon.url)} pokemon={pokemon} index={index} />;
          })
          }
        </section>
        {this.state.currentPokemon ? (
          <section className="singlePokeInfo">
            <SinglePokeInfo pokemon={this.state.currentPokemon} />
          </section>
        ) :
        (
          null
        )}
      </div>
    );
  }
}

export default App;
