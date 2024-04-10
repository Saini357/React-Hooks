import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";

const FormChakra = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input
        type="text"
        name="name"
        id="name"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>
          {formik.errors.name}
        </div>
      )}

      <FormControl
        mt={4}
        isInvalid={formik.touched.email && formik.errors.email}
      >
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && (
          <div style={{ color: "red", marginTop: "0.5rem" }}>
            {formik.errors.email}
          </div>
        )}
      </FormControl>

      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formik.isSubmitting}
        type="submit"
        onClick={formik.handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormChakra;
