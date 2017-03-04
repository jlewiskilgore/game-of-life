import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
	constructor(props) {
		super(props);

		var initialBoardState = [];
		var boardRowAliveState;
		var randStartingCellState;

		for(var i=0; i<this.props.numOfRows; i++) {
			boardRowAliveState = [];
			for(var j=0; j<this.props.numOfCols; j++) {
				randStartingCellState = Math.random() >= 0.5;
				if(randStartingCellState == true) {
					randStartingCellState = 1;
				}
				else {
					randStartingCellState = 0;
				}
				boardRowAliveState.push(randStartingCellState);
			}
			initialBoardState.push(boardRowAliveState);
		}

		this.state = { currentBoardState: initialBoardState, nextBoardState: [] }

		this.updateBoardState = this.updateBoardState.bind(this);
		this.getNextGenerationCellValues = this.getNextGenerationCellValues.bind(this);
		this.getAliveNeighborCount = this.getAliveNeighborCount.bind(this);
	}

	updateBoardState(cellRow, cellCol, newStateValue) {
		//console.log("updating board state...");
		var updatedBoard = this.state.currentBoardState;
		updatedBoard[cellRow][cellCol] = newStateValue;

		this.setState({ currentBoardState: updatedBoard });
	}

	getNextGenerationCellValues() {

	}

	getAliveNeighborCount(cellRow, cellCol) {
		var currentBoard = this.state.currentBoardState;
		//console.log(currentBoard);
		var numNeighborsAlive = 0;
		console.log("r: " + cellRow + ", c: " + cellCol);

		//Top left corner, no row above and no column to left
		if(cellRow == 0 && cellCol == 0) {
			console.log("top left corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//Top right corner, no row above and no column to right
		else if(cellRow == 0 && cellCol == (this.props.numOfCols - 1)) {
			console.log("top right corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol];
		}
		//Bottom left corner, no row below and no column to left
		else if(cellRow == (this.props.numOfRows - 1) && cellCol == 0) {
			console.log("bottom left corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1];
		}
		//Bottom right corner, no row below and no column to right
		else if(cellRow == (this.props.numOfRows - 1) && cellCol == (this.props.numOfCols - 1)) {
			console.log("bottom right corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol-1];
		}
		//If on first row, no row above
		else if(cellRow == 0) {
			numNeighborsAlive = currentBoard[cellRow][cellCol];
		}
		//If on left most column, no column to left
		else if(cellCol == 0) {

		}
		//If on last row, no row below
		else if(cellRow == this.props.numOfRows) {

		}
		//If on right most column, no column to right
		else if(cellCol == this.props.numOfCols) {

		}
		//Interior cells
		else {

		}

		console.log(numNeighborsAlive);

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
				boardRow.push(<Cell rowNum={i} colNum={j} updateState={this.updateBoardState} 
					aliveState={this.state.currentBoardState[i][j]} countAliveNeighbors={this.getAliveNeighborCount} />);
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
