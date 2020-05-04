import React, { Component } from 'react';

class FilterItem extends Component {
	render () {
		return (
            <div className="FilterItem">
                <label className="Control Control--Type-radio">
                    <input type="radio" className="Control-Input" name="todo-filter" value="ALL" />
                        <span className="Control-Icon"></span>
                        <span className="Control-Text">Все</span>
                </label>
                <div className="FilterItem-Count">0</div>
            </div>
		)
	}
}

export default FilterItem
