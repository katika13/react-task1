import React from 'react';
import TodoApp from '../components/TodoApp.js'

const TodayPlan = () => {
  return (
    <React.Fragment>
      <h1>Your plans for today:</h1>
      <TodoApp/>
    </React.Fragment>
  )
}

export default TodayPlan
