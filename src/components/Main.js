import React from "react";
import "../styles/Main.css";

const Main = props => (
  <div className="cardPic">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);


export default Main;
