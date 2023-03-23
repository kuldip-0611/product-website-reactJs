import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";
import { Edit_profilevalidation } from "../../constants/validation";
import { getProfile_data, Update_profile_data } from "../../utils/Auth/Change_Profile";

console.log(localStorage.getItem("loginData"));
const ProfileEdit = () => {
  
  const [data] = useState(getProfile_data());

  
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    mobile: '',
  };

  const handleSubmit = (values) => {
   
    Update_profile_data(values);
    
    
  };
  return (
    <div>
      <p className="h3 text-center mb-5 mt-5">Edit Your Details</p>
      <Formik
        initialValues={initialState}
        validationSchema={Edit_profilevalidation}
        onSubmit={handleSubmit}
      >
        <Form className="w-50 m-auto ">
          <label className="form-label">Your First Name</label>
          <Field
            type="text"
            name="fname"
            className="w-100 form-control"
            id="profile_edit_fname"
          />
          <p className="text-danger">
            <ErrorMessage name="fname" />
          </p>
          <label className="form-label">Your Last Name</label>
          <Field
            type="text"
            name="lname"
            className="w-100 form-control"
            id="profile_edit_lname"
          />

          <label className="form-label">Your Email</label>
          <Field type="email" name="email" className="w-100 form-control" id="profile_edit_email" />
          <p className="text-danger">
            <ErrorMessage name="email" />
          </p>
          <label className="form-label">Mobile Number</label>
          <Field type="number" name="mobile" className="w-100 form-control" id="profile_edit_mobile" />
          <p className="text-danger">
            <ErrorMessage name="mobile" />
          </p>
          <Button type="submit" id="change_profile_submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileEdit;
