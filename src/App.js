import React from "react";
import HelloDiv from "./components/HelloDiv";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Characters from "./characters.json";


class App extends React.Component {
    // Setting this.state.friends to the friends json array
    state = {
      Characters
    };
  
   // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
    <div>
        <div>
        <Navbar />
        <HelloDiv />
        </div>
        <div>
          {this.state.Characters.map(Character => (
            <Main
              removeCharacter={this.removeCharacter}
              id={Character.id}
              name={Character.name}
              image={Character.image}
            />
          ))}
        </div>
    </div>
      );
    }
  }
  

export default App;
