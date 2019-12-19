import React from "react";

//todo <Todo /> displays 'todo' data to DOM

function Todo({ todo, remove }) {
  return (
    <div className="todo" onClick={remove}>
      <h3 id={todo.id}>{todo.task}</h3>
    </div>
  );
}
export default Todo;
