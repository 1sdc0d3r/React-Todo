import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";

const todoForm = ({ values, resetForm }) => {
  const { update } = values;
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
        <button type="button" onClick={update} className="form-update-btn">
          Update
        </button>
      </Form>
    </div>
  );
};

const FormikTodoForm = withFormik({
  mapPropsToValues({ task, onSubmit, onUpdate }) {
    return {
      task: task || "",
      submit: onSubmit,
      update: onUpdate
    };
  },
  handleSubmit({ taskInput, submit }) {
    submit({ task: taskInput || "", id: Date.now(), completed: false });
  }
})(todoForm);

export default FormikTodoForm;
