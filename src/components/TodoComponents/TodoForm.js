import React from "react";
import { withFormik, Form, Field } from "formik";

// todo <input /> <button>Add Todo/Submit</button> <button>Clear Completed</button>

const todoForm = () => {
  return (
    <Form>
      <Field
        name="taskInput"
        placeholder="Input Task"
        type="text"
        className="form-input-task"
      />
      <button type="submit" className="form-submit-btn">
        Add Todo
      </button>
      <button className="form-clear-btn">Clear</button>
    </Form>
  );
};

const CreateTodoForm = ({ onSubmit }) => {
  const FormikTodoForm = withFormik({
    mapPropsToValues({ task }) {
      return {
        task: task || ""
      };
    },
    handleSubmit(values) {
      //   console.log("values", values.taskInput);
      onSubmit({ task: values.taskInput, id: Date.now(), completed: false });
    }
  })(todoForm);
  return <FormikTodoForm />;
};

export default CreateTodoForm;

//     task: data,
//     id: Date.now(),
//     completed: false
//
