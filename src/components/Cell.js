import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);

		this.state = { isAlive: this.props.aliveState };

		this.toggleAlive = this.toggleAlive.bind(this);
	}

	toggleAlive() {
		// Change live cell to dead
		if(this.state.isAlive == 1) {
			this.setState({ isAlive: 0 });
			this.props.updateState(this.props.rowNum, this.props.colNum, 0);
		}
		// Change dead cell to live
		else {
			this.setState({ isAlive: 1 });
			this.props.updateState(this.props.rowNum, this.props.colNum, 1);
		}
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