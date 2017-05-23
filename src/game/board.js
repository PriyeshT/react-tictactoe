import React from 'react';
import Header from '../header/header';
import Square from './square';

class Board extends React.Component {
  //When you want to aggregate data from multiple children or to have the child components
  //communicate with each other, move the state upwards so that it lives in the parent
  //component. The parent can then pass the state back down to children via props, so that
  //child components are always in sync with each other and with the parent.

  constructor() {
      //In JS Classes, you need to explicitly call super(); when defining
      //the constructor of a subclass.
      super();
      //React Components can have state by setting 'this.state' in the constructor,
      //which should be considered private to the component.
      this.state = {
          squares: Array(9).fill(null),
          xIsNext: true
      }
  }

  handleClick(i) {
      //slice() is used to copy the squares array instead of mutating it.
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext
        });
  }

  renderSquare(i) {
    //parenthesis are added so that JS doesn't insert semicolon after return.
    //We are passing two props to Square, viz value and onClick.
    return (<Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
    />);
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <Header name="Priyesh Tungare" />
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;