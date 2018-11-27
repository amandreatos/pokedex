import React from "react";
import "./PokeButtons.css";

const PokeButtons = props => {
  return (
    <div className="PokeButtons">
      <button onClick={props.clearSidebar} className="PokeButton">Close</button>
      <button className="PokeButton" />
      <button className="PokeButton" />
      <button className="PokeButton" />
      <button className="PokeButton" />
      <button className="PokeButton" />
      <button className="PokeButton" />
      <button className="PokeButton" />
    </div>
  );
};

export default PokeButtons;
