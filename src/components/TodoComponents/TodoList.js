import React, { useEffect } from "react";
import Todo from "./Todo";

// todo Receives Todos array, map to create <Todo />

const TodoList = ({
  todoList,
  remove,
  complete,
  notComplete,
  lostAndFoundList,
  searching
}) => {
  // if (!lostAndFoundList || lostAndFoundList.length === 0) {
  if (searching === false) {
    return (
      <>
        <div className="todoList-comp">
          {todoList.map(e => (
            <Todo
              todo={e}
              remove={remove}
              complete={complete}
              notComplete={notComplete}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="todoList-comp">
          {lostAndFoundList.map(e => (
            <Todo
              todo={e}
              remove={remove}
              complete={complete}
              notComplete={notComplete}
            />
          ))}
          {/* {console.log("lostAndFound Render", lostAndFoundList, "todo", todoList)} */}
        </div>
      </>
    );
  }

  //   return Object.keys(todoList).map(e => <Todo todo={todoList[e]} />);
};

export default TodoList;
