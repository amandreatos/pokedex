import React from "react";
import "./PokeSidebar.css";

const PokeSidebar = props => {
  return (
    <div className="singlePokeInfoWrapper">
      <div className="pokeSidebarTopActions">
        <button
          className="button closeButton"
          type="button"
          onClick={props.clearSidebar}
        >
          Clear
        </button>
      </div>
      <div className="singlePokeInfoInner">
       {props.children}
      </div>
      <div className="pokeSidebarBottomActions">
      </div>
    </div>
  );
};

export default PokeSidebar;
