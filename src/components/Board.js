import React from 'react'
import Square from './Square.js'

export default class Board extends React.Component {

    renderSquare(i, squareShade) {
      return <Square shade={squareShade}/>;
    }
  
    render() {
      const board = [];
      for(let i = 0; i < 8; i++){
        const squareRows = [];
        for(let j = 0; j < 8; j++){
          const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
          squareRows.push(this.renderSquare((i*8) + j, squareShade));
        }
        board.push(<div className="board-row">{squareRows}</div>)
      }
  
      return (
        <div className="board">
          {board}
        </div>
      );
    }
  }
  
  function isEven(num){
    return num % 2 == 0
  }