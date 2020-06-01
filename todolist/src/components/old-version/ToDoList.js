import React from 'react';
import ToDoListItem from "./ToDoListItem"

const ToDoList = ({todoitems, onDelete, onToggleFinished}) => {

	const items = todoitems.map((item)=>{
		return (
			<li key={item.id} className="todo-list-item">
				<ToDoListItem
					{...item}
					onDelete={() => onDelete(item.id)}
					onToggleFinished={() => onToggleFinished(item.id)}  />
			</li>
		)
	});

	return (
		<ul className="app-list list-group">{items}</ul>
	)
}

export default ToDoList
