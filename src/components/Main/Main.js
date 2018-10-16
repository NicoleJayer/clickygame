import React from "react";
import "./Main.css";

const Main = props => (
  <div className="cardPic"
  onClick={() => props.setClicked(props.id)} >
  
    <div className="img-container z-depth-3">
      <img alt={props.name} src={props.image} value={props.id} />
    </div>
   
  </div>
);


export default Main;
