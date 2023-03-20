import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";
import DecryptData from "../../utils/Password_decryption";
import { encryptData } from "../../utils/password_encryption";
import { toast } from "react-hot-toast";
import { Change_Passwordvalidation } from "../../constants/validation";
import {
  ChangePassword_initialState,
  Change_Password,
} from "../../utils/Auth/Change_Password";
const ChangePassword = () => {
/**
 * The handleSubmit function is called when the form is submitted. It receives the values of the form
 * as a parameter
 */
  const handleSubmit = (values) => {
    console.log(values);

    Change_Password(values);
  };
  return (
    <div>
      <p className="h3 text-center mt-5 mb-5">Change Password</p>
      <Formik
        initialValues={ChangePassword_initialState}
        validationSchema={Change_Passwordvalidation}
        onSubmit={handleSubmit}
      >
        <Form className="w-50 m-auto ">
          <label className="form-label">Enter Current Password</label>
          <Field
            type="password"
            name="current_password"
            className="w-100 form-control bg-secondary"
          />
          <p className="text-danger">
            <ErrorMessage name="current_password" />
          </p>
          <label className="form-label">Edit Password</label>
          <Field
            type="password"
            name="edit_password"
            className="w-100 form-control bg-secondary"
          />
          <p className="text-danger">
            <ErrorMessage name="edit_password" />
          </p>
          <label className="form-label">Confirm Edit Password</label>
          <Field
            type="password"
            name="confirm_edit_password"
            className="w-100 form-control bg-secondary"
          />
          <p className="text-danger">
            <ErrorMessage name="confirm_edit_password" />
          </p>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
