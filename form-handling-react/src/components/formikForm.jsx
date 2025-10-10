import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Initial values for the form
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  });

  // Submit handler
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik form submitted:", values);
    alert(`User ${values.username} registered successfully!`);

    // Simulate mock API call
    // Example: fetch("https://jsonplaceholder.typicode.com/users", { ... })
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>User Registration (Formik Form)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage
            name="username"
            component="p"
            style={{ color: "red" }}
          />

          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="p"
            style={{ color: "red" }}
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
