import React, { Component, useEffect } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import CreateTodoForm from "./components/TodoComponents/TodoForm";
//todo REMINDER: BUY BLUE-LIGHT FILTER GLASSES
class App extends Component {
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: []
  };

  onSubmitHandler = task => {
    this.setState({ todos: [...this.state.todos, task] });
  };

  removeTodoHandler = evt => {
    const id = evt.target.id;
    this.setState({
      todos: [...this.state.todos.filter(e => e.id != id)]
    });
    console.log(this.state.todos);
  };

  //todo ADD EVENT HANDLER FOR COMPLETED W/ BUTTON AND COLOR CHANGE
  //todo TOGGLE todos.completed to true once marked as completed, move to new list
  //TODO STYLE CSS
  render() {
    return (
      <div>
        <CreateTodoForm onSubmit={this.onSubmitHandler} />
        <TodoList todoList={this.state.todos} remove={this.removeTodoHandler} />
      </div>
    );
  }
}

export default App;

// constructor() {
//   super();
//   this.state = [
// {
//   task: "Clean",
//   id: Date.now(),
//   completed: false
// },
// {
//   task: "School",
//   id: Date.now(),
//   completed: false
// }
//   ];
// }

// onSubmitHandler = (state, data) => {
//   console.log("before", state);
//   if ((state = [])) {
//     this.setState([{ task: data, id: Date.now(), completed: false }]);
//   }
//   //  else {
//   // console.log("after", state);
//   // }
//   console.log("after", state);
// };

// onSubmitHandler = data => {
//   console.log("before", this.state);
//   let stateCopy = this.state;
//   console.log("copy", stateCopy);
//   stateCopy.push({
//     task: data,
//     id: Date.now(),
//     completed: false
//   });
//   // this.state = stateCopy;
//   // this.setState([stateCopy]);
//   // console.log(...this.state);
//   console.log("after", this.state);
// };
