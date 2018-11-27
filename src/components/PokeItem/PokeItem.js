import React from "react";
import "./PokeItem.css";

const PokeItem = props => {
  return (
    <figure onClick={() => props.handleClick(props.pokemon.url)} className="singlePokemon">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index +
          1}.png`}
        alt={props.pokemon.name}
      />
    </figure>
  );
};

export default PokeItem;
