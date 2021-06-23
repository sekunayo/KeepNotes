import { useFormik } from "formik";
import React, { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext";
import ProgressBar from "../ProgressBar/ProgressBar";
import * as yup from "yup";

const signupSchema = yup.object({
  password: yup.string().required("* password is a required field"),
  confirmPassword: yup.string().required("* password is a required field"),
});
function PersonalizedInfo() {
  const { progress, submitPassword } = useContext(SignupContext);
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      actions.resetForm({
        password: "",
        confirmPassword: "",
      });
      submitPassword(values);
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
          <h2 className="signup-heading-title">Security</h2>
          <p className="text text__center">
            Kindly secure your account with us...
          </p>
        </div>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="signup-form-input-container">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            ></input>
          </div>
          <p className="error">
            {formik.touched.password && formik.errors.password}
          </p>
          <div className="signup-form-input-container">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            ></input>
          </div>
          <p className="error">
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </p>
          <button type="submit" className="form-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalizedInfo;
