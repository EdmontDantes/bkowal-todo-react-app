import React, { Component } from 'react'
import './styles/createTodoItem.scss'

class CreateToDoItem extends Component {
  constructor() {
    super();
    this.state = {
        initialNameOfTodoItem: '',
        priority: 1,
        minCharForTodoNameSatisfied: false
    }
  }

  sendSubmit = (event, value) => {
    event.preventDefault();
    this.props.submitCreateTodo(event, value)
    this.setState({
      initialNameOfTodoItem: '',
      priority: 1,
      minCharForTodoNameSatisfied: false
    })
  }

  onChangeTodoName = (event) => {
    const minCharForTodoNameCreation = 3
    if(event.target.value.length >= minCharForTodoNameCreation) {
      this.setState({
        initialNameOfTodoItem: event.target.value,
        priority: 1,
        minCharForTodoNameSatisfied: true
      })
    } else {
      this.setState({
        initialNameOfTodoItem: event.target.value,
        priority: 1,
        minCharForTodoNameSatisfied: false
      })
    }
  }

  render() {
    console.log('current CreateToDoItem Component State:',  this.state)
    return (
      <div className="createTodoItem">
      <div className="checkForMinCharOfName">{this.state.minCharForTodoNameSatisfied ? 'wow 3 characters or more you actually might have meaningful task todo' : 'ohh seems that your task todo name is less than 3 characters increase that length'}</div>
        <form className="formCreateTodoItem" onSubmit={(event) => {
          if (this.state.minCharForTodoNameSatisfied) this.sendSubmit(event, this.state)
        }}>
          <input type="text" placeholder="Input name of your task" value={this.state.initialNameOfTodoItem} onChange={this.onChangeTodoName} />
          <button type="submit" className="submit">Create Todo Item</button>
        </form>
      </div>
    )
  }
}

export default CreateToDoItem;