import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext.js";
import ProgressBar from "../ProgressBar/ProgressBar.js";
import * as yup from "yup";
import { Link } from "react-router-dom";

const signupSchema = yup.object({
  fullName: yup.string().required("* fullname is a required field"),
  username: yup.string().required("* username is a required field"),
});
function PersonalInfo() {
  const { progress, submitPersonalInfo } = useContext(SignupContext);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      actions.resetForm({
        fullName: "",
        username: "",
      });
      submitPersonalInfo(values);
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
          <h2 className="signup-heading-title">
            Welcome! First things first...
          </h2>
          <p className="text text__center">
            Kindly input your personal details
          </p>
        </div>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="signup-form-input-container">
            <label for="name">Full Name</label>
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <p className="error">
            {formik.touched.fullName && formik.errors.fullName}
          </p>
          <div className="signup-form-input-container">
            <label for="username">Display Name</label>
            <input
              type="text"
              placeholder="Display name"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <p className="error">
            {formik.touched.username && formik.errors.username}
          </p>
          <button type="submit" className="form-button">
            Next
          </button>
        </form>
        <p className="text bottom-text">
          <span>Already have an account ?</span>
          <Link className="bottom-text-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
