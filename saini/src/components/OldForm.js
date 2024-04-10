import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";

function OldForm() {
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

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "name is required";
    }

    if (!values.email) {
      errors.email = "email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 6) {
      errors.password = "password must be at least 6 characters";
    }

    return errors;
  };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("name ie required"),
  //   email: Yup.string().email("Email is invalid").required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    // validationSchema,
  });

  return (
    <div className="conatiner">
      <form action="post" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name} </div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email} </div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password} </div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldForm;
