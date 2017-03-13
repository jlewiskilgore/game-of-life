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
				randStartingCellState = Math.random() >= 0.9;
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

		this.state = { currentBoardState: initialBoardState, nextBoardState: initialBoardState };

		this.updateBoardState = this.updateBoardState.bind(this);
		this.getNextGenerationCellValues = this.getNextGenerationCellValues.bind(this);
		this.getAliveNeighborCount = this.getAliveNeighborCount.bind(this);
		this.clearGameBoard = this.clearGameBoard.bind(this);
	}

	updateBoardState(cellRow, cellCol, newStateValue) {
		var updatedBoard = this.state.currentBoardState;
		updatedBoard[cellRow][cellCol] = newStateValue;

		this.setState({ currentBoardState: updatedBoard });
	}

	getNextGenerationCellValues() {
		var currentBoard = this.state.currentBoardState;
		var nextBoard = [];
		var nextBoardRow;
		var nextValue;
		var liveNeighborCount;

		for(var i=0; i<this.props.numOfRows; i++) {
			nextBoardRow = [];
			for(var j=0; j<this.props.numOfCols; j++) {

				liveNeighborCount = this.getAliveNeighborCount(i, j);

				if(currentBoard[i][j] == 1) {
				// If a live cell has fewer than 2 live neighbors, it dies
					if(liveNeighborCount < 2) {
						nextValue = 0;
					}
				// If a live cell has 2 or 3 live neighbors, it lives
					else if(liveNeighborCount ==2 || liveNeighborCount ==3) {
						nextValue = 1;
					}
				// If a live cell has more than 3 live neighbors, it dies
					else if(liveNeighborCount > 3) {
						nextValue = 0;
					}
				}
				else if(currentBoard[i][j] == 0) {
				// If a dead cell has 3 live neighbors, it becomes alive
					if(liveNeighborCount == 3) {
						nextValue = 1;
					}
					else {
						nextValue = 0;
					}
				}
				nextBoardRow.push(nextValue);
			}
			nextBoard.push(nextBoardRow);
		}
		this.setState({ currentBoardState: nextBoard });
	}

	getAliveNeighborCount(cellRow, cellCol) {
		var currentBoard = this.state.currentBoardState;
		var numNeighborsAlive = 0;

		//Top left corner, no row above and no column to left
		if(cellRow == 0 && cellCol == 0) {
			numNeighborsAlive = currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//Top right corner, no row above and no column to right
		else if(cellRow == 0 && cellCol == (this.props.numOfCols - 1)) {
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol];
		}
		//Bottom left corner, no row below and no column to left
		else if(cellRow == (this.props.numOfRows - 1) && cellCol == 0) {
			numNeighborsAlive = currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1];
		}
		//Bottom right corner, no row below and no column to right
		else if(cellRow == (this.props.numOfRows - 1) && cellCol == (this.props.numOfCols - 1)) {
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol-1];
		}
		//If on first row, no row above
		else if(cellRow == 0) {
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//If on left most column, no column to left
		else if(cellCol == 0) {
			numNeighborsAlive = currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1]
							  + currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//If on last row, no row below
		else if(cellRow == (this.props.numOfRows - 1)) {
			numNeighborsAlive = currentBoard[cellRow-1][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1]
							  + currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow][cellCol+1];
		}
		//If on right most column, no column to right
		else if(cellCol == (this.props.numOfCols - 1)) {
			numNeighborsAlive = currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow-1][cellCol-1]
							  + currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow+1][cellCol-1];
		}
		//Interior cells
		else {
			numNeighborsAlive = currentBoard[cellRow-1][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1]
							  + currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}

		return numNeighborsAlive;
	}

	clearGameBoard() {
		var clearBoardState = [];
		var currentBoard = this.state.currentBoardState;
		var boardRowAliveState;

		for(var i=0; i<this.props.numOfRows; i++) {
			boardRowAliveState = [];
			for(var j=0; j<this.props.numOfCols; j++) {
				boardRowAliveState.push(0);
			}
			clearBoardState.push(boardRowAliveState);
		}

		this.setState({ currentBoardState: clearBoardState }, function() { this.forceUpdate() });
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
			gameBoard.push(<div className="board-row">{boardRow}</div>);
		}

		return (
			<div id="game-board">
			  {gameBoard}
			</div>
		);
	}
}

export default GameBoard;
