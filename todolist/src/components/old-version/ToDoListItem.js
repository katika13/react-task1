import React, { Component } from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import './ToDoListItem.scss'


export default class ToDoListItem extends Component {
	onChecked(e){
		e.preventDefault();
	}
	render() {
		const {label, onDelete, onToggleFinished, finished, dueDate} = this.props;
		let status = finished ? "checked" : "";
		let className = "todo-list-item__label";

		if(finished) {
			className += " checked"
		}


		return (
			<div className={className}>
				<label>
					<input
						type="checkbox"
						onClick={onToggleFinished}
						checked={this.props.onChecked}/>
					<div>
						<p className="todo-title">{label}</p>
						<p className="todo-duedate">{moment(new Date(dueDate)).fromNow()}</p>
					</div>
				</label>
					<button className="btn-trash btn-sm float-right"
						type="button"
						onClick={onDelete} >
						<i className="fa  fa-trash-o"></i>
					</button>
			</div>
		)
	}
};
