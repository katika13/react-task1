import React, { Component } from 'react';
import ToDoList from './ToDoList';

class AddToDo extends Component {

	constructor(props) {
	    super(props);
		this.state = {
			items: '',
	    	value: ''
	    };
		this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	  }

	  handleChange(e) {
	    this.setState({value: e.target.value});
	  }

	  handleReset(e) {
		this.setState({value: ''});
	  }


	  handleSubmit(e) {
		e.preventDefault()
		let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
		let newitem = this.state.value
		items.push(newitem)
	    localStorage.setItem('items', JSON.stringify(items));
		this.setState({value: ''});
		console.log(newitem)
		document.getElementById('todolist').append(<ToDoList />)
	  }




	  render () {
	  	if (typeof localStorage["items"] === "undefined") {

	  	return (
			<>
			<div onSubmit={this.handleSubmit}>
				<form className="AddForm"  onReset={this.handleReset}>
		            <input id="item" type="text" className="TextInput" value={this.state.value} onChange={this.handleChange} placeholder="Ввести новый пункт" />
		            <button type="submit">Добавить</button>
		            <button type="reset">Очистить</button>
		        </form>
				<div className="ToDoList ps">
		  			<div className="ToDoList-Empty">Список задач пуст</div>
		  		</div>
			</div>
			</>
	  		)

	  	}

	  	return (

			<>
			<div onSubmit={this.handleSubmit}>
			<form className="AddForm" onReset={this.handleReset}>
	            <input id="item" type="text" className="TextInput" value={this.state.value} onChange={this.handleChange} placeholder="Ввести новый пункт" />
	            <button type="submit">Добавить</button>
	            <button type="reset">Очистить</button>
	        </form>
			<div id="todolist" className="ToDoList ps">
			<ToDoList items={this.items}/>
			</div>
			</div>
			</>
	  	)
	}
}

export default AddToDo
