import React from "react";
import Todo from "./Todo";

// todo Receives Todos array, map to create <Todo />

const TodoList = ({ todoList, remove, complete }) => {
  return todoList.map(e => (
    <Todo todo={e} remove={remove} complete={complete} />
  ));
  //   return Object.keys(todoList).map(e => <Todo todo={todoList[e]} />);
};

export default TodoList;
