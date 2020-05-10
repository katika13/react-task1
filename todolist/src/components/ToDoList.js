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


// let items = JSON.parse(localStorage.getItem('items'));
//
// class ToDoList extends Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.handleDelete = this.handleDelete.bind(this);
// 	}
//
// 	handleDelete(e) {
// 		e.preventDefault();
// 		let arrIndex = e.target.dataset.id;
// 		items.splice(arrIndex, 1);
// 	    localStorage.setItem('items', JSON.stringify(items));
//
// 		this.setState({
// 	      items: '',
// 	      value: ''
// 	    });
// 	}
//
// 	componentDidMount(){
// 		this.setState({
// 	      items: '',
// 	      value: ''
// 	    });
// 	}
//
// 	render() {
// 	    return (
// 			<>
// 			   {items.map((item, i) =>
// 				   <div className="Todo"  key={item}>
// 					   <label>
// 						   <input type="checkbox" className="Control-Input" value="on" />
// 						   <span className="Control-Icon"></span>
// 					   </label>
// 					   <div className="Todo-Text">
// 						 {item}
// 					   </div>
// 					   <input type="button" className="Todo-Delete" value="Удалить" data-id={i++} onClick={this.handleDelete} />
// 				   </div>
// 				 )}
// 			 </>
// 	    );
// 	}
// }

export default ToDoList
