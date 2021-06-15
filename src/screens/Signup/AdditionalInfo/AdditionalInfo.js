import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext";
import ProgressBar from "../ProgressBar/ProgressBar";
import * as yup from "yup";

const signupSchema = yup.object({
  email: yup.string().required("* email is a required field"),
  address: yup.string().required("* address is a required field"),
});
function AdditionalInfo() {
  const { progress, submitAdditionalInfo } = useContext(SignupContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      actions.resetForm({
        email: "",
        address: "",
      });
      submitAdditionalInfo(values);
    },
  });
  return (
    <div className="signup">
      <div className="signup-box">
        <div className="signup-logo">
          <p>Keep notes</p>
        </div>
        <ProgressBar arrayType={progress.classes} />
        <div className="signup-heading">
          <h2 className="signup-heading-title">Additional Information</h2>
          <p className="text text__center">
            Let know a little about where you come...
          </p>
        </div>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="signup-form-input-container">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            ></input>
          </div>
          <p className="error">{formik.touched.email && formik.errors.email}</p>
          <div className="signup-form-input-container">
            <label for="address">House Address</label>
            <input
              type="text"
              name="address"
              placeholder="street number, street address, city, state,country."
              onChange={formik.handleChange("address")}
              onBlur={formik.handleBlur("address")}
              value={formik.values.address}
            ></input>
          </div>
          <p className="error">
            {formik.touched.address && formik.errors.address}
          </p>
          <button className="form-button">Next</button>
        </form>
      </div>
    </div>
  );
}

export default AdditionalInfo;
