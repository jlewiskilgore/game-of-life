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
			this.props.updateState(this.props.rowNum, this.props.colNum, 0);
		}
		else {
			this.setState({ isAlive: 1 });
			console.log("cell is now alive");
			this.props.updateState(this.props.rowNum, this.props.colNum, 1);
		}

		// For testing neighbor count
		//this.props.countAliveNeighbors(this.props.rowNum, this.props.colNum);
	}

	componentWillUpdate() {
		// Check if cell needs to be rendered with an updated value
		if(this.state.isAlive != this.props.aliveState) {
			this.setState({ isAlive: this.props.aliveState }, function() { this.forceUpdate() });
		}
	}

	render(){
		if(this.props.aliveState == 1) {
			return (
				<div id="board-cell">
				  <input className="alive" type="button" onClick={this.toggleAlive} />
				</div>
			);
		}
		else if(this.props.aliveState == 0) {
			return (
				<div id="board-cell">
				  <input className="notAlive" type="button" onClick={this.toggleAlive} />
				</div>
			);
		}
	}
}

export default Cell;