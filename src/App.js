import './App.css';
import Board from './components/Board.js'
import InitializeBoard from './helper/InitializeBoard.js'
import React from 'react'
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: InitializeBoard(),
      player: 1
    }
  }
  render(){
    return (
      <div className="App">
        <Board squares={this.state.squares}/>
      </div>
    );
  }
}
