import React from "react";
import HelloDiv from "./components/HelloDiv/HelloDiv";
import Main from "./components/Main/Main";
import Navbar from "./components/Nav/Navbar";
import Characters from "./characters.json";


class App extends React.Component {

  // const clickedCharacter = clickedCharacter
    // Setting this.state.friends to the friends json array
    state = {
      Characters,
      currentScore: 0,
      // topScore: 0,
      clickedCharacter: []
      // chosenCharacter: false

    };
  
   // Map over this.state.friends and render a FriendCard component for each friend object

   handleClick = (id) => {
     alert(id);
    let clickedCharacter = this.state.clickedCharacter;
    let currentScore = this.state.currentScore;
    // let topScore = this.state.topScore;

    if (clickedCharacter.indexOf(id) !== this.id) {
        //if the clicked character indexOf id in array is not equal to clicked this.id
       // then psuh into clickedCharacter id
      clickedCharacter.push(this.id);
      //add one to current score
      currentScore++;
      //shuffle cards function
      Characters.sort(function(a, b){return 0.5 - Math.random()});

      //set new states(why do I have to do this)

      this.setState({ Characters });
      this.setState({ currentScore });

      console.log(currentScore);
      // this.setState({clickMessage});

    }

    // else {
    //   resetGame();
    // }


  };


  // resetGame = () => {
  //   let currentScore = 0;

  //   alert("Sorry game has ended, feel free to try again!");

  //   Characters.sort(function(a, b){return 0.5 - Math.random()});

  //   this.setState({ currentScore});
  //   this.setState({ Characters });
  // }


    render() {
      return (
    <div>
        <div>
        <Navbar 
        score={this.state.currentScore}
        />
        <HelloDiv />
        </div>
        <div>
          {this.state.Characters.map((Character, i) => (
            <Main
              key={i}
              id={Character.id}
              name={Character.name}
              image={Character.image}
              handleClick={this.handleClick}
            />
          ))}
        </div>
    </div>
      );
    
          }

        }

export default App;
