import React from "react";
import { useForm } from "react-hook-form";
import "./loginCSS.css";

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="loginTitle">Member Login</h3>
      <p className="loginInfo">log in to continue</p>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            name="userName"
            id="userName"
            ref={register({ required: true })}
          />
          {errors.userName && <span>Enter a valid name or Email</span>}
          <span className="omrs-input-label">Email or Username</span>
        </label>
      </div>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="password"
            name="password"
            id="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>Enter a password</span>}
          <span className="omrs-input-label">password</span>
        </label>
      </div>

      <div className="loginRow">
        <label htmlFor="remember">remember me</label>
        <input type="checkbox" name="remember" id="remember" />
      </div>
      <button type="submit" className="submitButton">
        Log In
      </button>
      <p className="loginInfoFooter">forgot password</p>
      <p className="loginInfo">create an Account</p>
    </form>
  );
}
