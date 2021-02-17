import './App.css';
import Board from './components/Board.js'
import InitializeBoard from './helper/InitializeBoard.js'
import React from 'react'
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: InitializeBoard(),
      player: 1,
      turn: 0
    }
  }

  handleClick(i){
    let squares = this.state.squares;
    // this.state.squares = null;
    console.log(i);
    console.log(this.state);
    squares[i].style={backgroundImage: "none"};
    this.setState({
      squares: squares,
      player: 2,
      turn: i
    })
  }

  render(){
    return (
      <div className="App">
        <Board 
          squares={this.state.squares}
          onClick = {(i) => this.handleClick(i)}    
        />
        <div>
          {this.state.turn}
        </div>
      </div>
    );
  }
}
