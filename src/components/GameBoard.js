import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var boardRow;
		var gameBoard = [];
		var numRows = 10;
		var numCols = 10;

		for(var i=0; i<10; i++) {
			boardRow = [];
			for(var j=0; j<10; j++) {
				boardRow.push(<Cell rowNum={i} colNum={j} />);
			}
			gameBoard.push(<div id="board-row">{boardRow}</div>);
		}

		return (
			<div id="game-board">
			  {gameBoard}
			</div>
		);
	}
}

export default GameBoard;
