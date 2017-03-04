import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);

		this.state = { isAlive: this.props.aliveState };

		this.toggleAlive = this.toggleAlive.bind(this);
	}

	toggleAlive() {
		if(this.state.isAlive == 1) {
			this.setState({ isAlive: 0 });
			console.log("cell is now dead");
			this.props.updateState(this.props.rowNum, this.props.colNum, this.state.isAlive);
		}
		else {
			this.setState({ isAlive: 1 });
			console.log("cell is now alive");
			this.props.updateState(this.props.rowNum, this.props.colNum, this.state.isAlive);
		}

		// For testing neighbor count
		this.props.countAliveNeighbors(this.props.rowNum, this.props.colNum);
	}

	render(){
		if(this.state.isAlive == 1) {
			return (
				<div id="board-cell">
				  <input className="alive" type="button" onClick={this.toggleAlive} />
				</div>
			);
		}
		else if(this.state.isAlive == 0) {
			return (
				<div id="board-cell">
				  <input className="notAlive" type="button" onClick={this.toggleAlive} />
				</div>
			);
		}
	}
}

export default Cell;