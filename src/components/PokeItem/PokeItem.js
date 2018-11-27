import React from "react";

const PokeItem = props => {
  return (
    <figure className="singlePokemon">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index +
          1}.png`}
        alt={props.pokemon.name}
      />
      <h4 className="singlePokemon__name">{props.pokemon.name}</h4>
    </figure>
  );
};

export default PokeItem;
