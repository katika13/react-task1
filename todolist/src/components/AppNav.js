import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import About from '../pages/About';
import Login from '../pages/Login';
import Home from '../pages/Home';
import './AppNav.scss'


const AppNav = () => {
	return (
		<>
		<nav>
			<ul className="app-nav">
				<li><NavLink exact to="/">Open</NavLink></li>
				<li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/login">Login</NavLink></li>
			</ul>
		</nav>
		<Switch>
			<Route exact path="/">
			  <Home />
			</Route>
			 <Route path="/about">
			   <About />
			 </Route>
			 <Route path="/login">
			   <Login />
			 </Route>
		</Switch>
		</>
	)
}

export default AppNav
