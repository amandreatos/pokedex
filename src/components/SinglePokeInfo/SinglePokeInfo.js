import React from "react";
import "./SinglePokeInfo.css";

const SinglePokeInfo = props => {
  return (
      <section className="singlePokeInfo">
    <div className="oldSchoolOverlay" />
    <figure className="singlePokeInfo_data">
      <div className="singlePokeInfo_data__heading">
        <div className="singlePokeInfo_data__heading__half firstHalf">
          <h2 className="singlePokeInfo_data__name">
            {props.pokemon.name} #{props.pokemon.id}
          </h2>
          <div className="singlePokeInfo_data__types">
            {props.pokemon.types.map(type => {
              return (
                <span key={type.type.url} className="singlePokeInfo_data__type">
                  {type.type.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="singlePokeInfo_data__heading__half secondHalf">
          <img
            src={props.pokemon.sprites.front_default}
            alt={props.pokemon.name}
          />
        </div>
      </div>

      <h4 className="singlePokeInfo_data__header">General</h4>
      <div className="singlePokeInfo_data__item">
        <span className="singlePokeInfo_data__item__label">
          Base Experience
        </span>{" "}
        <span className="singlePokeInfo_data__item__data">
          {props.pokemon.base_experience}
        </span>
      </div>
      <div className="singlePokeInfo_data__item">
        <span className="singlePokeInfo_data__item__label">Height</span>{" "}
        <span className="singlePokeInfo_data__item__data">
          {props.pokemon.height} m
        </span>
      </div>
      <div className="singlePokeInfo_data__item">
        <span className="singlePokeInfo_data__item__label">Weight</span>{" "}
        <span className="singlePokeInfo_data__item__data">
          {props.pokemon.height} lbs
        </span>
      </div>
      <br/>
      <div className="singlePokeInfo_data__stats">
        <h4 className="singlePokeInfo_data__header">Stats</h4>
        {props.pokemon.stats.map((stat, index) => {
          return (
            <div key={index} className="singlePokeInfo_data__stat">
              <span className="singlePokeInfo_data__stat__label">
                {stat.stat.name}
              </span>{" "}
              <span className="singlePokeInfo_data__stat__data">
                {stat.base_stat}
              </span>
            </div>
          );
        })}
      </div>
    </figure>
    </section>
  );
};

export default SinglePokeInfo;
