import React from "react";

function CompletedTodoList({ completedList, notComplete, remove }) {
  if (completedList.length !== 0) {
    return (
      <div className="completed-todos-wrapper">
        <h2>Completed Tasks:</h2>
        {completedList.map(e => {
          //   console.log(e);
          //   console.log("ran");
          return (
            <>
              <div className="todo">
                <h3 className={e.completed ? "completed" : "todo-task"}>
                  {e.task}
                </h3>
                <div className="btn-div">
                  <button
                    className="btn-not-complete"
                    id={e.id}
                    onClick={notComplete}
                  >
                    Mark Not Complete
                  </button>
                  <button className="btn-remove" id={e.id} onClick={remove}>
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  } else {
    return (
      <>
        <div className="completed-todos-wrapper">
          <h2>Completed Tasks:</h2>
        </div>
        <div className="no-tasks">No Completed Tasks</div>
      </>
    );
  }
}
export default CompletedTodoList;
