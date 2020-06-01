import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from './components/AddToDo';
import AppNav from './components/AppNav';
import FilterItem from './components/FilterItem';
import ToDoList from './components/ToDoList';


import './App.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tododata: localStorage.getItem('tododata') ? JSON.parse(localStorage.getItem('tododata')) : [],
			filter: 'all',
			term: ''
		};
		this.deleteItem = this.deleteItem.bind(this)
		this.addItem = this.addItem.bind(this)
		this.onToggleFinished = this.onToggleFinished.bind(this)
		this.onFilterSelect = this.onFilterSelect.bind(this)
		this.searchPost = this.searchPost.bind(this)

	}

	deleteItem(id){
		this.setState(({tododata})=>{
			const index = tododata.findIndex(elem => elem.id === id)

			const newArr = [...tododata.slice(0, index), ...tododata.slice(index + 1)];
			localStorage.setItem('tododata', JSON.stringify(newArr));

			return {
				tododata: JSON.parse(localStorage.getItem('tododata')),
			}
		});
	}

	addItem(body, date){
		const newItem = {
			label: body,
			finished: false,
			id: Date.now(),
			dueDate: date
		}

		this.setState(({tododata}) => {
			const newArr = [...tododata, newItem];
			localStorage.setItem('tododata', JSON.stringify(newArr));

			return{
				tododata: JSON.parse(localStorage.getItem('tododata')),
			}
		});
	}

	onToggleFinished(id) {
		this.setState(({tododata}) => {
			const index = tododata.findIndex(elem => elem.id === id);

			const oldItem = tododata[index];
			const newItem = {...oldItem, finished: !oldItem.finished}

			const newArr = [...tododata.slice(0, index), newItem, ...tododata.slice(index + 1)];
			localStorage.setItem('tododata', JSON.stringify(newArr));

			return {
				tododata: JSON.parse(localStorage.getItem('tododata')),
			}
		});
	}

	searchPost(items, term) {
		if(term.length === 0) {
			return items
		}
		return items.filter((item) => {
			return item.label.indexOf(term) > -1
		});
	}

	filterToDoList(items, filter){
		if(filter === 'done') {
			return items.filter(item => item.finished)
		}
		else if( filter === 'todo') {
			return items.filter(item => !item.finished)
		}
		return items
	}

	onFilterSelect(filter) {
		this.setState({filter})
	}

	render() {
		const {tododata, filter} = this.state;

		const searchResults = this.filterToDoList(tododata, filter)

		return (
			<>
			<div className="app">
				<AddToDo
					onAdd={this.addItem}/>
				<FilterItem
					filter={filter}
					onFilterSelect={this.onFilterSelect}
					/>
				<ToDoList
					todoitems={searchResults}
					onToggleFinished={this.onToggleFinished}
					onDelete={this.deleteItem}/>
			</div>
			</>
		)
	}
}
