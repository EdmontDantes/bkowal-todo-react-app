import React, { Component } from 'react'


class createToDoItem extends Component {
  constructor() {
    super();
    this.state = {
        initialNameOfTodoItem: '',
        initialDescriptionOfTodoItem: ''
    }
  }

  render() {

    return (
      <div className="createTodoItem">
      <h2>TestTest</h2>
        <form className="formCreateTodoItem">
          <input type="text" placeholder="Input name of your task" value={this.state.initialNameOfTodoItem} />
          <textarea type="text" placeholder="Input description of your task" rows="4" cols="50" value={this.state.initialDescriptionOfTodoItem} />
          <button type="submit" className="submit">Create Todo Item</button>
        </form>
      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="App">
      <createToDoItem />

      

      <h1 style={{backgroundColor: 'purple' }}>Hello My own Todo React App</h1>
      </div>
    )
  }

}

export default App;