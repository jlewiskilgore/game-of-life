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
				randStartingCellState = Math.random() >= 0.85;
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

		console.log(initialBoardState);

		this.updateBoardState = this.updateBoardState.bind(this);
		this.getNextGenerationCellValues = this.getNextGenerationCellValues.bind(this);
		this.getAliveNeighborCount = this.getAliveNeighborCount.bind(this);
	}

	updateBoardState(cellRow, cellCol, newStateValue) {
		console.log("updating board state...");
		var updatedBoard = this.state.currentBoardState;
		updatedBoard[cellRow][cellCol] = newStateValue;

		this.setState({ currentBoardState: updatedBoard });
	}

	getNextGenerationCellValues() {
		console.log("getting next gen values...");
		var currentBoard = this.state.currentBoardState;
		var nextBoard = this.state.nextBoardState;
		var liveNeighborCount;

		for(var i=0; i<this.props.numOfRows; i++) {
			for(var j=0; j<this.props.numOfCols; j++) {

				liveNeighborCount = this.getAliveNeighborCount(i, j);
				
				//console.log("curr value: " + currentBoard[i][j]);
				//console.log("neighbor count: " + liveNeighborCount);

				if(currentBoard[i][j] == 1) {
				// If a live cell has fewer than 2 live neighbors, it dies
					if(liveNeighborCount < 2) {
						//console.log("alive to dead");
						nextBoard[i][j] = 0;
					}
				// If a live cell has 2 or 3 live neighbors, it lives
					else if(liveNeighborCount ==2 || liveNeighborCount ==3) {
						//console.log("alive stays alive");
						nextBoard[i][j] = 1;
					}
				// If a live cell has more than 3 live neighbors, it dies
					else if(liveNeighborCount > 3) {
						//console.log("alive to dead");
						nextBoard[i][j] = 0;
					}
				}
				else if(currentBoard[i][j] == 0) {
				// If a dead cell has 3 live neighbors, it becomes alive
					if(liveNeighborCount == 3) {
						//console.log("dead to alive");
						nextBoard[i][j] = 1;
					}
					else {
						//console.log("dead stays dead");
						nextBoard[i][j] = 0;
					}
				}
			}
		}

		this.setState({ currentBoardState: nextBoard, nextBoardState: nextBoard });
	}

	getAliveNeighborCount(cellRow, cellCol) {
		var currentBoard = this.state.currentBoardState;
		//console.log(currentBoard);
		var numNeighborsAlive = 0;
		//console.log("r: " + cellRow + ", c: " + cellCol);

		//Top left corner, no row above and no column to left
		if(cellRow == 0 && cellCol == 0) {
			//console.log("top left corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//Top right corner, no row above and no column to right
		else if(cellRow == 0 && cellCol == (this.props.numOfCols - 1)) {
			//console.log("top right corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol];
		}
		//Bottom left corner, no row below and no column to left
		else if(cellRow == (this.props.numOfRows - 1) && cellCol == 0) {
			//console.log("bottom left corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1];
		}
		//Bottom right corner, no row below and no column to right
		else if(cellRow == (this.props.numOfRows - 1) && cellCol == (this.props.numOfCols - 1)) {
			//console.log("bottom right corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol-1];
		}
		//If on first row, no row above
		else if(cellRow == 0) {
			//console.log("first row, non corner");
			numNeighborsAlive = currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//If on left most column, no column to left
		else if(cellCol == 0) {
			//console.log("first column, non corner");
			numNeighborsAlive = currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1]
							  + currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol+1];
		}
		//If on last row, no row below
		else if(cellRow == (this.props.numOfRows - 1)) {
			//console.log("last row, non corner");
			numNeighborsAlive = currentBoard[cellRow-1][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1]
							  + currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow][cellCol+1];
		}
		//If on right most column, no column to right
		else if(cellCol == (this.props.numOfCols - 1)) {
			//console.log("last column, non corner");
			numNeighborsAlive = currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow-1][cellCol-1]
							  + currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow+1][cellCol-1];
		}
		//Interior cells
		else {
			//console.log("interior");
			numNeighborsAlive = currentBoard[cellRow-1][cellCol-1]
							  + currentBoard[cellRow-1][cellCol]
							  + currentBoard[cellRow-1][cellCol+1]
							  + currentBoard[cellRow][cellCol-1]
							  + currentBoard[cellRow][cellCol+1]
							  + currentBoard[cellRow+1][cellCol-1]
							  + currentBoard[cellRow+1][cellCol]
							  + currentBoard[cellRow+1][cellCol+1];
		}

		//console.log(numNeighborsAlive);
		return numNeighborsAlive;
	}

	runSimulationLoop() {
		console.log("run sim");
	}

	render() {
		console.log("render game board");
		console.log(this.state.currentBoardState);

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
