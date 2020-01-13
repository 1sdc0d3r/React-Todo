import React from "react";
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
  if (!searching) {
    return (
      <>
        <div className="todoList-comp">
          <h2>Tasks:</h2>
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
        <h2
          style={{
            textAlign: "center",
            width: "60%",
            justifyContent: "center",
            marginTop: "1rem",
            fontStyle: "italic",
            margin: "auto"
          }}
        >
          Searching:
        </h2>
        <div className="todoList-comp">
          {lostAndFoundList.map(e => (
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
  }
};

export default TodoList;
