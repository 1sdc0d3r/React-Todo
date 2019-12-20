import React from "react";

//todo <Todo /> displays 'todo' data to DOM

function Todo({ todo, remove, complete }) {
  return (
    <div className="todo">
      {/* todo.completed === false = "todo-task" */}
      <h3 className={todo.completed ? "completed" : "todo-task"}>
        {todo.task}
      </h3>
      <div className="btn-div">
        <button className="btn-complete" id={todo.id} onClick={complete}>
          Complete?
        </button>
        <button className="btn-remove" id={todo.id} onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
}
export default Todo;
