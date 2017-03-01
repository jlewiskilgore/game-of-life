import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="game-board">
			  <p>Game Board Goes Here...</p>
			  <Cell />
			  <Cell />
			  <Cell />
			  <Cell />
			  <Cell />
			</div>
		);
	}
}

export default GameBoard;
