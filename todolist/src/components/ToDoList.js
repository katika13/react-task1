import React, { Component } from 'react';

let items = JSON.parse(localStorage.getItem('items'));

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: '',
			value: JSON.parse(localStorage.getItem('items'))
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(e) {
		e.preventDefault();
		let arrIndex = e.target.dataset.id;
		items.splice(arrIndex, 1);
	    localStorage.setItem('items', JSON.stringify(items));

		this.setState({
	      items: '',
	      value: ''
	    });
	}


	render() {
	    return (
			<>
			   {items.map((item, i) =>
				   <div className="Todo"  key={item}>
					   <label>
						   <input type="checkbox" className="Control-Input" value="on" />
						   <span className="Control-Icon"></span>
					   </label>
					   <div className="Todo-Text">
						 {item}
					   </div>
					   <input type="button" className="Todo-Delete" value="Удалить" data-id={i++} onClick={this.handleDelete} />
				   </div>
				 )}
			 </>
	    );
	}
}

export default ToDoList
