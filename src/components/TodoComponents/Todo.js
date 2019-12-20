import React from "react";

function Todo({ todo, remove, complete, notComplete }) {
  return (
    <div className="todo">
      <h3 className={todo.completed ? "completed" : "todo-task"}>
        {todo.task}
      </h3>
      <div className="btn-div">
        <button className="btn-complete" id={todo.id} onClick={complete}>
          Complete
        </button>
        <button className="btn-not-complete" id={todo.id} onClick={notComplete}>
          Not Complete
        </button>
        <button className="btn-remove" id={todo.id} onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
}
export default Todo;
