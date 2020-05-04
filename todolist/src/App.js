import React from 'react';
import Filter from './components/Filter';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import './App.scss';

function ToDoApp() {
  return (
    <>
    <div className="ToDoApp">

        //component AddToDo
        <AddToDo />

        //component ToDoList
        <ToDoList />

        //component Filter
        <Filter />

    </div>
    </>
  );
}

export default ToDoApp;
