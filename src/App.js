import React, { Component } from 'react';
import Header from  './components/layout/Header';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import {v4 as uuid}  from 'uuid';
//for generating random ids after installing uuid in terminal


import './App.css';

class App extends Component {
  state ={
    todos: [
      {
        // doing this will generate random ids
        id: uuid(), 
        title: 'Breaksfast',
        completed: false
      },
      {
        id: uuid(),
        title: 'Baking',
        completed: true
      },
      {
        id: uuid(),
        title: 'Laundry',
        completed: false
      }
    ]
  }

  //Toggle complete
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

// Delete Todo
delTodo = (id) =>{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)] });
}


//Add Todo
addTodo = (title) => {
  // console.log(title)
  const newTodo = {
    id: uuid(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}

  render(){
    // console.log(this.state.todos)
  return (
    <div className="App">
      <div className="container">
        <Header />
        < AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo} />
       </div>
    </div>
  );
}
}

export default App;
