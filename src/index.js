import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img src="http://placehold.it/75" />
      <div
        style={{
          display: "inline-block",
          marginLeft: "10px",
          verticalAlign: "top"
        }}
      >
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>Name Here</div>
        <div> Company Name here ... </div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      <Card />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<CardList />, rootElement);
