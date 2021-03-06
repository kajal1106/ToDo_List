import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from  './components/layout/Header';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About';
// import {v4 as uuid}  from 'uuid';
//for generating random ids after installing uuid in terminal
import axios from 'axios';

import './App.css';

class App extends Component {
  state ={
    todos: []
      /*{
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
      */
  }

  componentDidMount(){
    //api to generate to do list from jsonplaceholder after install axios
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
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

  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)] }));
  
  }


//Add Todo
addTodo = (title) => {
  // console.log(title)
   axios.post('https://jsonplaceholder.typicode.com/todos',
   {
     title,
     completed:false
   })
     .then(res =>   this.setState({ todos: 
      [...this.state.todos, res.data] }));

}

  render(){
    // console.log(this.state.todos)
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render= {props => ( 
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo} />
            </React.Fragment>
          ) } />
         <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}
}

export default App;
