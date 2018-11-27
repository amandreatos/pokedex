import React from 'react';
import Pokeball from "../../assets/images/pokeball-icon.png";
import "./Loader.css";

const Loader = () => {
    return <div className="Loader"><img className="LoaderImage spin" src={Pokeball} alt="Pokeball" /> </div>
}

export default Loader;