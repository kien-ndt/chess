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
      turn: 0,
      selected: -1
    }
  }

  handleClick(i){
    let squares = this.state.squares;
    // this.state.squares = null;
    if (this.state.selected == -1){
      if (squares[i] != null){
        this.setState({
          squares: squares,
          player: this.state.player,
          turn: 0,
          selected: i
        })
      }
    }
    else {
      squares[i] = squares[this.state.selected];
      squares[this.state.selected] = null;
      this.setState({
        squares: squares,
        player: this.state.player,
        turn: 0,
        selected: -1
      })
    }
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
