import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './AddToDo.scss';

export default function TodoForm(props) {
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
            <DatePicker
				selected={props.dueDate}
    			onChange={props.onHandleDateChange}
			/>
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
