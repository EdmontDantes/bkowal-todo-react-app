import React, { Component } from 'react'



class DisplayToDoInComplete extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    console.log('DisplayIncompleteTodoList State:', this.state)
    console.log('DisplayIncompleteTodoList Props:', this.props.todosArray)
    const filteredTodosIncomplete = this.props.todosArray.filter((task) => task.completed !== true)
    console.log('DisplayIncompleteTodoList filteredTodosIncomplete:', filteredTodosIncomplete)
    return (
      <div className="displayToDoComplete">
      <h1 style={{backgroundColor: "limegreen"}}>Hello I am a Todo Incomplete tasks</h1>
      {filteredTodosIncomplete.map((task) => {
        return(
          <div key={task.id} className="individualTodoTaskDisplay">
          <p>{task.initialNameOfTodoItem}</p>
          </div>
        )
      })}
      </div>
    )
  }
}

export default DisplayToDoInComplete