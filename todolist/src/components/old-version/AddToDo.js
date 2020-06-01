import React from 'react';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
import './AddToDo.scss';


export default function AddToDo(props) {
	return (
		  	<form
				className="add-panel d-flex"
				onSubmit={props.onSubmit}
				onReset={props.onReset}>
				<div className="add-new-post">
					<input
						type="text"
						placeholder="Add new task"
						className="form-control new-post-label"
						onChange={props.onChange}
						value={props.value}
					/>
					<button
						type="reset"
						className="btn-reset">
					<i className="fa fa-times"></i>
					</button>
				</div>
				<div>
					<button
						type="submit"
						className="btn-additem">
					<i className="fa fa-check"></i>
					</button>
				</div>
			</form>
  );
}
//
// export default class AddToDo extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			text: '',
// 			dueDate: new Date()
// 		}
// 		this.onHandleChange = this.onHandleChange.bind(this)
// 		this.onHandleDateChange = this.onHandleDateChange.bind(this)
// 		this.onSubmit = this.onSubmit.bind(this)
// 		this.onReset = this.onReset.bind(this)
// 	}
//
// 	onHandleChange(e){
// 		this.setState({
// 			text: e.target.value,
// 		})
// 	}
// 	onHandleDateChange(date){
// 		this.setState({
// 			dueDate: date,
// 		})
// 	}
//
// 	onSubmit(e){
// 		e.preventDefault();
// 		this.props.onAdd(this.state.text, this.state.dueDate)
// 		this.setState({
// 			text: '',
// 			dueDate: new Date()
// 		})
// 	}
//
// 	onReset(e){
// 		e.preventDefault();
// 		this.setState({
// 			text: '',
// 			dueDate: new Date()
// 		})
// 	}
//
// 	render(){
//
// 		return (
// 			<form
// 			className="add-panel d-flex"
// 			onSubmit={this.onSubmit}
// 			onReset={this.onReset}>
// 			<div className="add-new-post">
// 				<input
// 					type="text"
// 					placeholder="Add new task"
// 					className="form-control new-post-label"
// 					onChange={this.onHandleChange}
// 					value={this.state.text}
// 				/>
// 				<button
// 					type="reset"
// 					className="btn-reset">
// 				<i className="fa fa-times"></i>
// 				</button>
// 				<DatePicker
// 					selected={this.state.dueDate}
//         			onChange={this.onHandleDateChange}
// 				/>
// 			</div>
// 			<div>
// 				<button
// 					type="submit"
// 					className="btn-additem">
// 				<i className="fa fa-check"></i>
// 				</button>
// 			</div>
// 			</form>
// 		)
// 	}
// }
