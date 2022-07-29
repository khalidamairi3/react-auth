import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const passwordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // log the user in, and report invalidation
    login(email, password);
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      {/* email */}
      <label htmlFor="email-field">Email</label>
      <input
        name="email-field"
        type="email"
        value={email}
        onChange={emailHandler}
      />
      {/* password */}
      <label htmlFor="password-field">Password</label>
      <input
        name="password-field"
        type="password"
        value={password}
        onChange={passwordHandler}
      />
      {/* submit button */}
      <button type="submit">Login</button>
      <div>
        Don't have an account? Sign up <Link to="/register">here</Link>
      </div>
    </form>
  );
};

export default Login;
