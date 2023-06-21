import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import "./login.css";
import Blob from "../../components/blob/Blob";
import { verifyUser } from "../../services/get";
import { login } from "../../store";
import { setUserLoginInfoToSession } from "../../services/sessions";
import { openSnackBar } from "../../services/service";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  // Calling verifyUser function to verify user with backend API, which returns user data
  // After getting user data from backend, we are dispatchind user data to store by calling login resolver
  // After that we are setting user data into session storage
  // After that we are calling a funciton which will navigate to home page.
  const formSubmit = (data) => {
    verifyUser(data.email, data.password)
      .then((loginData) => {
        // Here in loginData object, it has login key, where its value is true or flase based on user verified
        if(loginData.login){
          try {
            openSnackBar("success", "Login successful", dispatch);
            // loginData object has data key which contain user information
            dispatch(login({data: loginData.data, login: true}));
            setUserLoginInfoToSession(JSON.stringify({data: loginData.data, login: true}));
            navigateToHomePage();
          } catch {
            console.log(
              "Some error occured while dispatching user data in login page"
            );
          }
        }else {
          openSnackBar("error", loginData.message, dispatch);
        }
      })
      .catch((err) => {
        openSnackBar("error", err.message, dispatch);
        console.log("some error occured", err);
      });
  };

  // Function for navigating to home page.
  const navigateToHomePage = () => {
    navigate("/");
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
          <input
            type="submit"
            className="submit mt-2"
            value={"Sign In"}
            id="liveToastBtn"
          />

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
