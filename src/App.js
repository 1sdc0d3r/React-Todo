import React, { Component, useEffect } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import CreateTodoForm from "./components/TodoComponents/TodoForm";
import SearchBar from "./components/SearchBar";
import CompletedTodoList from "./components/TodoComponents/CompletedTodos";

class App extends Component {
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [],
    search: [],
    searching: false,
    completedTasks: []
  };

  // todo ADD A NEW STATE FOR COMPLETED TASKS DONE CHECK DEBUGGING
  // * If localStorage todosState === null then do nothing
  // * If localStorage todosState !== null then setState

  componentDidMount() {
    // alert("mounted");
    const localStorage = JSON.parse(window.localStorage.getItem("todosState"));
    localStorage === null
      ? this.stateReset()
      : this.setState({
          todos: localStorage,
          search: [],
          searching: false,
          completedTasks: []
        });
    //? window.addEventListener("unload", () => this.localStorageSave());
    // console.log("mounted Component");
  }

  localStorageSave = () => {
    window.localStorage.setItem("todosState", JSON.stringify(this.state.todos));
    window.localStorage.setItem(
      "completedTasks",
      JSON.stringify(this.state.completedTasks)
    );
    console.log(window.localStorage);
  };

  onSubmitHandler = task => {
    this.setState({
      todos: [...this.state.todos, task],
      completedTasks: [...this.state.completedTasks]
    });
    this.localStorageSave();
  };

  // onUpdateHandler = evt => {
  //   // console.log(...this.state.todos.filter(e => e.completed === true));

  //   this.setState({
  //     todos: [
  //       ...this.state.todos.filter(e => e.completed === false),
  //       ...this.state.completedTasks.filter(e => e.completed === false)
  //     ],
  //     completedTasks: [
  //       ...this.state.todos.filter(e => e.completed === true),
  //       ...this.state.completedTasks.filter(e => e.completed === true)
  //     ]
  //   });
  //   this.localStorageSave();

  //   // const stateCopy = {
  //   //   todos: [],
  //   //   completedTasks: []
  //   // };
  //   // stateCopy.todos.push(
  //   //   ...this.state.todos.filter(e => e.completed === false)
  //   // );
  //   // stateCopy.todos.push(
  //   //   ...this.state.completedTasks.filter(e => e.completed === false)
  //   // );
  //   // stateCopy.completedTasks.push(
  //   //   ...this.state.todos.filter(e => e.completed === true)
  //   // );
  //   // stateCopy.completedTasks.push(
  //   //   ...this.state.completedTasks.filter(e => e.completed === true)
  //   // );

  //   // this.setState(stateCopy);
  // };

  //! completeTodoHandler in testing to combine update
  completeTodoHandler = evt => {
    const id = evt.target.id;
    const index = this.state.todos.findIndex(todo => todo.id == id);
    this.state.todos[index].completed = !this.state.todos[index].completed;

    this.setState({
      todos: [
        ...this.state.todos.filter(e => e.completed === false),
        ...this.state.completedTasks.filter(e => e.completed === false)
      ],
      completedTasks: [
        ...this.state.todos.filter(e => e.completed === true),
        ...this.state.completedTasks.filter(e => e.completed === true)
      ]
    });
    this.localStorageSave();
  };

  // !Working completeTodoHandler
  // completeTodoHandler = evt => {
  //   const id = evt.target.id;

  //   this.setState(prevState => {
  //     return {
  //       todos: prevState.todos.map(todo => {
  //         if (todo.id == id) return { ...todo, completed: true };
  //         else return todo;
  //       })
  //     };
  //   });
  //   this.localStorageSave();
  // };

  // completeTodoHandler = e => {
  //   const id = e.target.id;
  //   const index = this.state.todos.findIndex(f => f.id == id);

  //   this.state.todos[index].completed = true;
  //   this.setState(this.state); // setState to cause a render

  //   this.localStorageSave();
  //   console.log(window.localStorage.todosState);
  // };

  notCompleteTodoHandler = evt => {
    // //*  stateCopy.todos[index].completed = false;
    // ! This code works as well
    // const id = e.target.id;
    // const todoIndex = this.state.todos.findIndex(todo => todo.id == id);
    // const completedIndex = this.state.completedTasks.findIndex(
    //   todo => todo.id == id
    // );
    // let stateCopy = this.state;

    // completedIndex === -1
    //   ? (stateCopy.todos[todoIndex].completed = false)
    //   : (stateCopy.completedTasks[completedIndex].completed = false);

    // //? Why does this return a -1 as the index?

    // this.setState(stateCopy);

    // this.localStorageSave();

    // ! same code as completeTodoHandler
    const id = evt.target.id;
    const index = this.state.completedTasks.findIndex(todo => todo.id == id);
    this.state.completedTasks[index].completed = !this.state.completedTasks[
      index
    ].completed;

    this.setState({
      todos: [
        ...this.state.todos.filter(e => e.completed === false),
        ...this.state.completedTasks.filter(e => e.completed === false)
      ],
      completedTasks: [
        ...this.state.todos.filter(e => e.completed === true),
        ...this.state.completedTasks.filter(e => e.completed === true)
      ]
    });
    this.localStorageSave();
  };

  removeTodoHandler = evt => {
    const id = evt.target.id;
    this.setState({
      todos: [...this.state.todos.filter(e => e.id != id)],
      completedTasks: [...this.state.completedTasks.filter(e => e.id != id)]
    });
    this.localStorageSave();
  };

  onSearchHandler = evt => {
    const input = evt.target.value.toLowerCase();
    console.log("input", input, "state", this.state.todos);
    // let lostAndFound = [];
    // this.state.todos.forEach(el =>
    //   el.task.includes(input) ? lostAndFound.push(el) : null
    // );
    !input
      ? this.stateReset()
      : this.setState({
          todos: [...this.state.todos],
          search: this.state.todos.filter(el =>
            el.task.toLowerCase().includes(input)
          ),
          searching: true,
          completedTasks: [...this.state.completedTasks]
        });
    // console.log(this.state);
  };

  onSearchBtnHandler = e => {
    const btn = e.target;
    alert("CONGRATULATIONS YOU FOUND A HIDDEN BUTTON - 1sdc0d3r");
    btn.className = "search-btn-found";
    setTimeout(() => (btn.className = "search-btn"), 5000);
  };

  stateReset = () => {
    this.setState({
      todos: [...this.state.todos],
      search: [],
      searching: false,
      completedTasks: [...this.state.completedTasks]
    });
  };

  render() {
    return (
      <>
        <div className="app-container">
          <div className="form">
            <h1>Todo List:</h1>
            <CreateTodoForm onSubmit={this.onSubmitHandler} />
            <SearchBar
              search={this.onSearchHandler}
              btnSearch={this.onSearchBtnHandler}
            />
          </div>
        </div>
        <TodoList
          todoList={this.state.todos}
          lostAndFoundList={this.state.search}
          searching={this.state.searching}
          complete={this.completeTodoHandler}
          notComplete={this.notCompleteTodoHandler}
          remove={this.removeTodoHandler}
          stateCheck={this.onSearchBtnHandler}
        />
        <CompletedTodoList
          completedList={this.state.completedTasks}
          notComplete={this.notCompleteTodoHandler}
          remove={this.removeTodoHandler}
          lostAndFoundList={this.state.search}
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
