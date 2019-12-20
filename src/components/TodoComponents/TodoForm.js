import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";

// todo <input /> <button>Add Todo/Submit</button> <button>Clear Completed</button>

const todoForm = ({ values, resetForm }) => {
  const { clear } = values;
  return (
    <div className="form">
      <Form>
        <Field
          name="taskInput"
          placeholder="Task to add"
          type="text"
          className="form-input-task"
        />
        <button type="submit" onClick={() => {}} className="form-submit-btn">
          Add Todo
        </button>
        <button type="button" onClick={clear} className="form-clear-btn">
          Clear
        </button>
      </Form>
    </div>
  );
};

const FormikTodoForm = withFormik({
  mapPropsToValues({ task, onSubmit, onClear }) {
    return {
      task: task || "",
      submit: onSubmit,
      clear: onClear
    };
  },
  handleSubmit({ taskInput, submit }) {
    submit({ task: taskInput || "", id: Date.now(), completed: false });
  }
})(todoForm);

export default FormikTodoForm;
