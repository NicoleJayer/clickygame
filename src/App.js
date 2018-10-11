import React from "react";
import HelloDiv from "./components/HelloDiv/HelloDiv";
import Main from "./components/Main/Main";
import Navbar from "./components/Nav/Navbar";
import Characters from "./characters.json";

function shuffleCharacters(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

class App extends React.Component {

    // Setting this.state.friends to the friends json array
    state = {
      Characters
    };
  
   // Map over this.state.friends and render a FriendCard component for each friend object

   handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(Characters);
    this.setState({ Characters: shuffledCharacters });
  };

   handleClick = id => {
    if (this.state.clicked.indexOf(id)) {
      alert("clicked");
    } else {
      this.handleShuffle();
    }
  };




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
              id={Character.id}
              name={Character.name}
              image={Character.image}
              handleClick={this.handleClick}
              handleShuffle={this.handleShuffle}
            />
          ))}
        </div>
    </div>
      );
    }






  }
  

export default App;
