import React from "react";
import { withFormik, Form, Field } from "formik";

const todoForm = ({ values, resetForm }) => {
  // console.log("values", values);
  return (
    <div className="form">
      <Form>
        <Field
          name="taskInput"
          id="taskInput"
          placeholder="Task to add"
          type="text"
          className="form-input-task"
          value={values.taskInput}
        />
        <button type="submit" onClick={() => {}} className="form-submit-btn">
          Add Todo
        </button>
      </Form>
    </div>
  );
};

const FormikTodoForm = withFormik({
  mapPropsToValues({ onSubmit }) {
    return {
      submit: onSubmit,
      taskInput: ""
    };
  },
  handleSubmit({ taskInput, submit }) {
    // console.log(resetForm);
    // console.log(props);

    if (taskInput) {
      submit({ task: taskInput, id: Date.now(), completed: false });
    }
  }
})(todoForm);

export default FormikTodoForm;
