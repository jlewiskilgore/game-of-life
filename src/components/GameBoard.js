import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
	constructor(props) {
		super(props);

		var initialBoardState = [];
		var boardRowAliveState;

		for(var i=0; i<this.props.numOfRows; i++) {
			boardRowAliveState = [];
			for(var j=0; j<this.props.numOfCols; j++) {
				boardRowAliveState.push(false);
			}
			initialBoardState.push(boardRowAliveState);
		}

		this.state = { currentBoardState: initialBoardState, nextBoardState: [] }

		this.updateBoardState = this.updateBoardState.bind(this);
	}

	updateBoardState(cellRow, cellCol, newStateValue) {
		console.log("updating board state...");
		var updatedBoard = this.state.currentBoardState;
		updatedBoard[cellRow][cellCol] = newStateValue;

		this.setState({ currentBoardState: updatedBoard });
	}

	render() {
		var boardRow;
		var boardRowAliveState;
		var gameBoard = [];
		var gameBoardAliveState = [];
		var numRows = this.props.numOfRows;
		var numCols = this.props.numOfCols;

		for(var i=0; i<numRows; i++) {
			boardRow = [];
			for(var j=0; j<numCols; j++) {
				boardRow.push(<Cell rowNum={i} colNum={j} updateState={this.updateBoardState} aliveState={this.state.currentBoardState[i][j]} />);
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
