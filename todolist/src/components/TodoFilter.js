// import React from "react";
// import PropTypes from "prop-types";
//
// TodoFilter.propTypes = {
// 	filter: PropTypes.func.isRequired,
// 	onFilterSelect: PropTypes.func.isRequired,
// };
// const buttons = [
//     {name: 'all', label: 'All'},
//     {name: 'done', label: 'Completed'},
//     {name: 'todo', label: 'To do'},
// ]
//
// export default function TodoFilter(props) {
//
//     const buttons = this.buttons.map(({name, label}) => {
//         const {filter, onFilterSelect} = props;
//         const active = filter === name;
//         const status = active ? "checked" : ''
//
//         return (
//             <label key={name} id={name}>
//                 <input
//                     type="radio"
//                     checked={status}
//                     name={name}
//                     onClick={onFilterSelect} />
//                 <span>{label}</span>
//             </label>
//         )
//     });
//     return (
//         <div className="filter-items">
//                {buttons}
//         </div>
//     )
// }









// import React from 'react'
// import FilterLink from '../containers/FilterLink'
// import { VisibilityFilters } from '../actions'
//
// const Footer = () => (
//   <div>
//     <span>Show: </span>
//     <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
//     <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
//     <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
//   </div>
// )
//
// export default Footer
