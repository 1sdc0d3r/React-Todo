import React, { Component, useEffect } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import CreateTodoForm from "./components/TodoComponents/TodoForm";
//todo REMINDER: BUY BLUE-LIGHT FILTER GLASSES

class App extends Component {
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: []
  };

  // * If localStorage todosState === null then do nothing
  // * If localStorage todosState !== null then setState

  componentDidMount() {
    // alert("mounted");
    const localStorage = JSON.parse(window.localStorage.getItem("todosState"));
    localStorage === null
      ? this.setState({ todos: [] })
      : this.setState({ todos: localStorage });
    //? window.addEventListener("unload", () => this.localStorageSave());
  }

  localStorageSave = () =>
    window.localStorage.setItem("todosState", JSON.stringify(this.state.todos));

  onSubmitHandler = task => {
    this.setState({ todos: [...this.state.todos, task] });
    this.localStorageSave();
    console.log(window.localStorage.todosState);
  };

  onClearHandler = e => {
    this.setState({
      todos: [...this.state.todos.filter(e => e.completed === false)]
    });
    this.localStorageSave();
    console.log(window.localStorage.todosState);
  };

  removeTodoHandler = evt => {
    const id = evt.target.id;
    this.setState({
      todos: [...this.state.todos.filter(e => e.id != id)]
    });
    this.localStorageSave();
    console.log(window.localStorage.todosState);
  };

  completeTodoHandler = e => {
    const id = e.target.id;
    const index = this.state.todos.findIndex(f => f.id == id);
    let stateCopy = this.state;
    stateCopy.todos[index].completed === false
      ? (stateCopy.todos[index].completed = true)
      : (stateCopy.todos[index].completed = false);
    this.setState(stateCopy);
    this.localStorageSave();
    console.log(window.localStorage.todosState);
  };

  render() {
    return (
      <div className="app">
        <div className="form-list">
          <h2>Todo List:</h2>
          <div className="createTodoForm-comp">
            <CreateTodoForm
              onSubmit={this.onSubmitHandler}
              onClear={this.onClearHandler}
            />
          </div>
        </div>
        <div className="todoList-comp">
          <TodoList
            todoList={this.state.todos}
            remove={this.removeTodoHandler}
            complete={this.completeTodoHandler}
          />
        </div>
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
