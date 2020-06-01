import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

import './TodoItem.scss'

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	remove: PropTypes.func.isRequired,
	completeToggle: PropTypes.func.isRequired
};

function TodoItem(props) {
  const { name, done, date } = props.todo;
  const { completeToggle, remove } = props;

  let className = "todo-list-item__label";

  if(done) {
	  className += " checked"
  }

  return (
    <>
	<div className={className}>
		<label>
			<div>
				<p className="todo-title" style={{ textDecoration: done ? "line-through" : "" }}>{name}</p>
				<p className="todo-duedate">{moment(new Date(date)).fromNow()}</p>
			</div>
		</label>
		<div>
			<button
				className="btn-complete"
				onClick={completeToggle}
			>
			{!done ? <i className="fa fa-circle-thin" aria-hidden="true"></i> : <i className="fa fa-check-circle" aria-hidden="true"></i>}</button>
			<button className="btn-trash"
				onClick={remove} >
				<i className="fa fa-times" aria-hidden="true"></i>
			</button>
		</div>
	</div>
    </>
  );
}

export default TodoItem;
