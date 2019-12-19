import React from "react";

//todo <Todo /> displays 'todo' data to DOM

function Todo({ todo, remove }) {
  return (
    <div className="todo">
      <h3>{todo.task}</h3>
      <button onClick={remove} id={todo.id}>
        Remove
      </button>
    </div>
  );
}
export default Todo;
