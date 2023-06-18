import axios from "axios";


// Funtion to insert the user into the data base.
export const insertUser = (userObj) => {
  const body = {
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
  };
  return axios
    .post("http://localhost:4200/post/insertUser", body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
