import React, { Component } from 'react';

class ToDoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: '',
			value: ''
		};

	}


	render() {
		return (
			<div className="ToDoList-Item">
				<div className="Todo">
					<label>
						<input type="checkbox" className="Control-Input" value="on" />
						<span className="Control-Icon"></span>
					</label>
					<div className="Todo-Text">{this.state.items}</div>
					<button className="Todo-Delete" title="Удалить задачу" type="button">Удалить</button>
				</div>
			</div>
		)
	}
}

export default ToDoItem
