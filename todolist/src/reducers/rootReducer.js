const initialState = {
	todos: [],
	inputValue: '',
	dueDate: Date.now()
}

export default (prevState = initialState, { type, payload }) => {

	let todos = [];

	switch (type) {

	case 'initializeTodos':
		return { ...prevState, todos: payload };

	case 'updateInput':
		return { ...prevState, inputValue: payload };

	case 'updateDate':
		return { ...prevState, dueDate: payload };

	case 'resetTodo':
		todos = [...prevState.todos];
		return { todos, inputValue: '', dueDate: Date.now() };

	case 'addTodo':
		if (!prevState.inputValue) return { ...prevState }; // didn't add anything

		const newTodo = { name: prevState.inputValue, done: false, date: prevState.dueDate };

		return { todos: [...prevState.todos, newTodo], inputValue: '', dueDate: Date.now() };

	case 'completeToggle':
		todos = [...prevState.todos];
		todos[payload].done = !todos[payload].done;
		return { ...prevState, todos };

	case 'removeTodo':
		todos = [...prevState.todos];
		todos.splice(payload, 1);
		return { ...prevState, todos };

	default:
		return { ...prevState };
	}
}
