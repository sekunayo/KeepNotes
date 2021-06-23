import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { SignupContext } from "../../context/SignupContext/SignupContext";

const loginSchema = yup.object({
  email: yup.string().email().required("* email address is a required field"),
  password: yup.string().required("* password is a required field"),
});
function PersonalInfo() {
  const { validateInfo } = useContext(SignupContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      actions.resetForm({
        email: "",
        password: "",
      });
      validateInfo(values);
    },
  });
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-logo">
          <p>Keep notes</p>
        </div>
        <div className="login-heading">
          <h2 className="login-heading-title">Login</h2>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="login-form-input-container">
            <label for="name">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <p className="error">{formik.touched.email && formik.errors.email}</p>
          <div className="login-form-input-container">
            <label for="username">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <p className="error">
            {formik.touched.password && formik.errors.password}
          </p>
          <button type="submit" className="form-button">
            Next
          </button>
        </form>
        <p className="text bottom-text">
          <span>Dont have an account yet ?</span>
          <Link className="bottom-text-link" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
