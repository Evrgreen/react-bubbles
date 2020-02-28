import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ setUser }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    setUser(values);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <input type="text" id="name" ref={register} name="username" />
        </label>
        <label htmlFor="password">
          <input type="password" id="password" ref={register} name="password" />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
