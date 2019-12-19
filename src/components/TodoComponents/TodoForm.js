import React from "react";
import { withFormik, Form, Field } from "formik";

// todo <input /> <button>Add Todo/Submit</button> <button>Clear Completed</button>

const todoForm = () => {
  return (
    <Form>
      <Field name="taskInput" placeholder="Input Task" type="text" />
      <button type="submit">Add Todo</button>
      <button>Clear Completed</button>
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
