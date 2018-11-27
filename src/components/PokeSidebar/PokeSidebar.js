import React from "react";
import "./PokeSidebar.css";
import PokeButtons from "../PokeButtons/PokeButtons";

const PokeSidebar = props => {
  return (
    <div className="singlePokeInfoWrapper">
      <div className="pokeSidebarTopActions">
     
      </div>
      <div className="singlePokeInfoInner">
       {props.children}
      </div>
      <div className="pokeSidebarBottomActions">
      <PokeButtons clearSidebar={props.clearSidebar}/>
      </div>
    </div>
  );
};

export default PokeSidebar;
