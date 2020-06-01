import React from 'react';
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
        <h1>Oops...</h1>
        <h3>We're so sorry<br/>but something went wrong</h3>
        <button type="button" className="btn btn-success"><NavLink exact to="/">Let's start again!</NavLink></button>
    </React.Fragment>
  )
}

export default NotFound
