import React from "react";
import "./Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, useToast } from "@chakra-ui/react";

function Forms() {
  const toast = useToast();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    toast({
      title: "submission successfull",
      description: "your form has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("email is invalid").required("Email is required"),
    password: Yup.string().required("password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="container">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />
          <br />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" />
          <br />
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  );
}

export default Forms;
