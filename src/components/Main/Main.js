import React from "react";
import "./Main.css";

const Main = props => (
  <div className="cardPic"  >
  
    <div className="img-container z-depth-3">
      <img onClick={() => props.handleClick(props.id)} alt={props.name} src={props.image} value={props.id} />
    </div>
   
  </div>
);


export default Main;
