import React, { Component } from 'react'
import CreateToDoItem from './partials/createTodoItem'
import DisplayToDoInComplete from './partials/displayToDoIncomplete'
import DisplayToDoComplete from './partials/displayToDoComplete'
import './style.scss'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  submitCreateTodo = (event, value) => {
    event.preventDefault();
    const pushedTodosObject = [...this.state.todos]
    let intermediateValueVariable = Object.assign({}, value);
    intermediateValueVariable.id = uuidv4();
    intermediateValueVariable.completed = false;
    pushedTodosObject.push(intermediateValueVariable)
    this.setState({
      todos: pushedTodosObject
    })
  }



  render() {
    console.log('App\'s state:', this.state);
    return (
      <div className="App">
      <CreateToDoItem submitCreateTodo={this.submitCreateTodo} />
      <div className="DisplayAndControlsTaskContainer" style={{display: 'flex', justifyContent: 'space-around'}}>
      
        <DisplayToDoInComplete todosArray={this.state.todos} />
        <DisplayToDoComplete todosArray={this.state.todos} />
      
      </div>
      </div>
    )
  }

}

export default App;