import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

import './TodoApp.scss';
function TodoApp() {

	const { todos, inputValue, dueDate } = useSelector(state => state)
	const dispatchTodoState = useDispatch();

	useEffect(() => {

		const LStodos = localStorage.getItem('todos');

		if (LStodos)
			dispatchTodoState({
				type: 'initializeTodos',
				payload: JSON.parse(LStodos)
			});
	}, [dispatchTodoState]);

	useEffect(() => {

		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function handleSubmit(e) {
		e.preventDefault();
		dispatchTodoState({ type: 'addTodo' });
	}

	function onReset(e){
		e.preventDefault();
		dispatchTodoState({ type: 'resetTodo' });
	}

  return (
	  <div className='app'>
		<TodoForm
			value = {inputValue}
			selected = {dueDate}
			onSubmit = {handleSubmit}
			onReset = {onReset}
			onChange = {e =>
				dispatchTodoState({ type: 'updateInput', payload: e.target.value })
			}

			onHandleDateChange = {date =>
				dispatchTodoState({ type: 'updateDate', payload: date })
			}
		/>

		<div>
		{todos.map((todo, index) => (
			<TodoItem
				key={index}
				todo={todo}
				remove={() =>
					dispatchTodoState({ type: 'removeTodo', payload: index })
				}
				completeToggle={() =>
					dispatchTodoState({ type: 'completeToggle', payload: index })
				}
			/>
		))}
		</div>

	  </div>
  );
}

export default TodoApp;
