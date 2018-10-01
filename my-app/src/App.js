import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends.map(item =>{
      item.clicked = false;
      return item;
    }),
    score:0
  };

  shuffleThisArray = (arra1) => {
    let ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }

  wasClicked = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let score = this.state.score;
    const friends = this.state.friends.map(item => {
      if (item.id ===id){
        if (item.clicked){
          score = 0;
          alert("you have lost")
        } 
      }
      else{
        item.clicked = true;
        score++;
      }
      return item
    });
    // Set this.state.friends equal to the new friends array
    this.setState({ score:score,friends:friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky-Game</Title>
        {this.shuffleThisArray(this.state.friends).map(friend => (
          <FriendCard
      
            wasClicked={this.wasClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
