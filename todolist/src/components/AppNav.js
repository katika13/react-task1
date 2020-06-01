import React from 'react';
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import TodayPlan from '../pages/TodayPlan';
import NotFound from '../pages/NotFound';
import './AppNav.scss'


const AppNav = () => {
	return (
		<>
		<nav>
			<ul className="app-nav">
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/planforday">Daily plan</NavLink></li>
				<li><NavLink to="/about">About</NavLink></li>
			</ul>
		</nav>
		<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/planforday" component={TodayPlan} />
			<Route component={NotFound} />
			<Redirect to="/404" />
		</Switch>
		</main>
		</>
	)
}

export default AppNav
