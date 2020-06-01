import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, NavLink, Redirect, BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

import About from './pages/About';
//import Login from './pages/Login';
import Home from './pages/Home';
import TodayPlan from './pages/TodayPlan';
import NotFound from './pages/NotFound';

const store = createStore(rootReducer);


ReactDOM.render((
    <Provider store={store}>
        <Router>
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
        </Router>
    </Provider>
), document.getElementById('root'));
