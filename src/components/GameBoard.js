import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="game-board">
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			  <div id="board-row"><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /></div>
			</div>
		);
	}
}

export default GameBoard;
