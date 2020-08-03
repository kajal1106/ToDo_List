import React, { Component } from 'react';
import Todos from './components/Todos.js';

import './App.css';

class App extends Component {
  state ={
    todos: [
      {
        id: 1,
        title: 'Breaksfast',
        completed: false
      },
      {
        id: 2,
        title: 'Baking',
        completed: true
      },
      {
        id: 3,
        title: 'Laundry',
        completed: false
      }
    ]
  }

markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

  render(){
    console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
    </div>
  );
}
}

export default App;
