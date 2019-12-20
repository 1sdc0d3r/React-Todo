import React, { Component, useEffect } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import CreateTodoForm from "./components/TodoComponents/TodoForm";
import SearchBar from "./components/SearchBar";

//!              REMINDER:
//todo REMINDER: BUY BLUE-LIGHT FILTER GLASSES

class App extends Component {
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [],
    search: [],
    searching: false
  };

  // todo ADD A NEW STATE FOR COMPLETED TASKS
  // * If localStorage todosState === null then do nothing
  // * If localStorage todosState !== null then setState

  componentDidMount() {
    // alert("mounted");
    const localStorage = JSON.parse(window.localStorage.getItem("todosState"));
    localStorage === null
      ? this.stateReset()
      : this.setState({ todos: localStorage, search: [], searching: false });
    //? window.addEventListener("unload", () => this.localStorageSave());
    // console.log("mounted Component");
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

    stateCopy.todos[index].completed = true;
    this.setState(stateCopy);

    this.localStorageSave();
    console.log(window.localStorage.todosState);
  };

  // completeTodoHandler = e => {
  //   const id = e.target.id;
  //   const index = this.state.todos.findIndex(f => f.id == id);

  //   this.state.todos[index].completed = true;
  //   this.setState(this.state);

  //   this.localStorageSave();
  //   console.log(window.localStorage.todosState);
  // };

  notCompleteTodoHandler = e => {
    const id = e.target.id;
    const index = this.state.todos.findIndex(f => f.id == id);
    let stateCopy = this.state;
    stateCopy.todos[index].completed = false;
    this.setState(stateCopy);
    this.localStorageSave();
    console.log(window.localStorage.todosState);
  };
//todo Make it not case sensitive on search

  onSearchHandler = evt => {
    const input = evt.target.value;
    console.log("input", input, "state", this.state.todos);
    // let lostAndFound = [];
    // this.state.todos.forEach(el =>
    //   el.task.includes(input) ? lostAndFound.push(el) : null
    // );
    !input
      ? this.stateReset()
      : this.setState({
          todos: [...this.state.todos],
          search: this.state.todos.filter(el => el.task.includes(input)),
          searching: true
        });
    // console.log(this.state);
  };

  onSearchBtnHandler = e => {
    this.setState({
      todos: [...this.state.todos],
      search: []
    });
  };
  stateReset = () => {
    this.setState({
      todos: [...this.state.todos],
      search: [],
      searching: false
    });
  };

  render() {
    return (
      <>
        <div className="app-container">
          <div className="form">
            <h2>Todo List:</h2>
            <CreateTodoForm
              onSubmit={this.onSubmitHandler}
              onClear={this.onClearHandler}
            />
            <SearchBar
              btnSearch={this.onSearchBtnHandler}
              search={this.onSearchHandler}
            />
          </div>
        </div>
        <TodoList
          todoList={this.state.todos}
          lostAndFoundList={this.state.search}
          remove={this.removeTodoHandler}
          complete={this.completeTodoHandler}
          notComplete={this.notCompleteTodoHandler}
          stateCheck={this.onSearchBtnHandler}
          searching={this.state.searching}
        />
      </>
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
