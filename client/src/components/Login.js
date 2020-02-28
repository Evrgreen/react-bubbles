import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWIthAuth";

import LoginForm from "./LoginForm";

const Login = () => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const loggingIn = async (value) => {
      console.log(value);
      axiosWithAuth()
        .post("/api/login", value)
        .then((response) => {
          console.log("Got a response");
          console.log(response.data.payload);
          window.localStorage.setItem("token", response.data.payload);
          history.push("/private");
        })
        .catch((error) => console.log({ error }));
    };
    if (user) {
      loggingIn(user);
    }
  }, [user]);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <LoginForm setUser={setUser} />
    </>
  );
};

export default Login;
