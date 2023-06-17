import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./login.css";
import Blob from "../../components/blob/Blob";

const Login = () => {
  // yup schema for the login form
  const schema = yup.object().shape({
    email: yup.string().email().required("Email Id is required"),
    password: yup.string().required("Password is required").min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //function is called when login form is submitted.
  const formSubmit = (data) => {
    console.log("form data", data);
  };

  return (
    <div>
      <div className="login-form">
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <p className="form-title">Sign in to your account</p>
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
          <input type="submit" className="submit mt-2" value={"Sign In"} />

          <p className="signup-link mt-1">
            No account?
            <Link to={"/signup"}>Sign up</Link>
          </p>
        </form>
      </div>
      <Blob />
    </div>
  );
};

export default Login;
