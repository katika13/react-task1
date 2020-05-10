import React, { Component } from 'react';
import './AddToDo.scss'

export default class AddToDo extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
		this.onHandleChange = this.onHandleChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.onReset = this.onReset.bind(this)
	}

	onHandleChange(e){
		this.setState({
			text: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();
		this.props.onAdd(this.state.text)
		this.setState({
			text: '',
		})
	}

	onReset(e){
		e.preventDefault();
		this.setState({
			text: '',
		})
	}

	render(){

		return (
			<form
			className="add-panel d-flex"
			onSubmit={this.onSubmit}
			onReset={this.onReset}>
				<input
					type="text"
					placeholder="Добавить новую задачу"
					className="form-control new-post-label"
					onChange={this.onHandleChange}
					value={this.state.text}
				/>
				<button
					type="submit"
					className="btn-additem">
				<i className="fa fa-check"></i>
				</button>
				<button
					type="reset"
					className="btn-reset">
				<i className="fa fa-times"></i>
				</button>
			</form>
		)
	}
}


// class AddToDo extends Component {
//
// 	constructor(props) {
// 	    super(props);
// 		this.state = {
// 			items: '',
// 	    	value: ''
// 	    };
// 		this.items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
// 		this.handleChange = this.handleChange.bind(this);
// 	    this.handleSubmit = this.handleSubmit.bind(this);
// 		this.handleReset = this.handleReset.bind(this);
// 	  }
//
// 	  handleChange(e) {
// 	    this.setState({value: e.target.value});
// 	  }
//
// 	  handleReset(e) {
// 		this.setState({value: ''});
// 	  }
//
//
// 	  handleSubmit(e) {
// 		e.preventDefault() //перехват действия по умолчанию
// 		let newitem = this.state.value //объявила переменную значение новой туду
// 		this.items.push(newitem) //отправила в массив
// 	    localStorage.setItem('items', JSON.stringify(this.items)); //обновила список туду в локалстор
// 		this.setState(this.items)
// 		// this.setState({
// 	    //   items: '',
// 	    //   value: ''
// 	    // });
// 		console.log(this.items)
// 	  }
//
//
//
//
// 	  render () {
// 	  	if (typeof localStorage["items"] === "undefined") {
//
// 	  	return (
// 			<>
// 			<div onSubmit={this.handleSubmit}>
// 				<form className="AddForm"  onReset={this.handleReset}>
// 		            <input id="item" type="text" className="TextInput" value={this.state.value} onChange={this.handleChange} placeholder="Ввести новый пункт" />
// 		            <button type="submit">Добавить</button>
// 		            <button type="reset">Очистить</button>
// 		        </form>
// 				<div className="ToDoList ps">
// 		  			<div className="ToDoList-Empty">Список задач пуст</div>
// 		  		</div>
// 			</div>
// 			</>
// 	  		)
//
// 	  	}
//
// 	  	return (
//
// 			<>
// 			<div onSubmit={this.handleSubmit}>
// 			<form className="AddForm" onReset={this.handleReset}>
// 	            <input id="item" type="text" className="TextInput" value={this.state.value} onChange={this.handleChange} placeholder="Ввести новый пункт" />
// 	            <button type="submit">Добавить</button>
// 	            <button type="reset">Очистить</button>
// 	        </form>
// 			<div id="todolist" className="ToDoList ps">
// 			<ToDoList items={this.items}/>
// 			</div>
// 			</div>
// 			</>
// 	  	)
// 	}
// }
//
//export default AddToDo
