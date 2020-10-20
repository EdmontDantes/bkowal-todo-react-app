import React, { Component } from 'react'
import CreateToDoItem from './partials/createTodoItem'
import './style.scss'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [{ name: '', priority: '', completed: false}]
    }
  }

  submitCreateTodo = (event, value) => {
    event.preventDefault();
    const pushedTodosObject = [...this.state.todos]
    pushedTodosObject.push(value)
    this.setState({
      todos: pushedTodosObject
    })
  }



  render() {
    console.log('App\'s state:', this.state);
    return (
      <div className="App">
      <CreateToDoItem submitCreateTodo={this.submitCreateTodo} />
      
      </div>
    )
  }

}

export default App;