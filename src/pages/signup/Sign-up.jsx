import "./signup.css";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import Blob from "../../components/blob/Blob";

const SignUp = () => {
  //sign up schema for the form using yup
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email Id is required"),
    password: yup.string().required("Password is required").min(8),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .min(8)
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //function which is called when form is submitted.
  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="signup-form">
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <p className="title">Register </p>
          {/* <p className="message">Signup now and get full access to our app. </p> */}
          <div className="input-container">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            <small className="text-danger">{errors.firstName?.message}</small>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <small className="text-danger">{errors.lastName?.message}</small>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Enter email"
              {...register("email")}
            />
            <small className="text-danger">{errors.email?.message}</small>
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
            />
            <small className="text-danger">{errors.password?.message}</small>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            <small className="text-danger">
              {errors.confirmPassword?.message}
            </small>
          </div>
          <input className="submit" type="submit" value={"Submit"} />
          <p className="signin">
            Already have an acount ?{" "}
            <Link className="link-to" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
      <Blob />
    </div>
  );
};

export default SignUp;
