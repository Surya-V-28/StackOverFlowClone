import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
// import { signUp } from "../../api";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const dispatch = useDispatch();
  // dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Enter email and password...");
    }
    if (isSignUp) {
      if (!name) {
        alert("Enter a name...");
      }
      dispatch(signup({ name, email, password }, navigate));
      // Dispatch basically triggers the action 
// And action is responsible for changing the state of application (means adding, removing or updating the data of application)
    } else {
      dispatch(login({ email, password }, navigate));
    }

    // console.log({ name, email, password });
  };

  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container-2">
        {/* auth-container */}
        {isSignUp && <img src={icon} alt="overflow" className="login-logo" />}
        <form onSubmit={handlerSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="name"
              id="username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Password</p>
              {!isSignUp && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional, <br />
                product updates, user research invitation, <br />
                company announcement, and digest.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignUp ? "Sign up" : "Log in"}
          </button>

          {isSignUp && (
            <p style={{ color: "666767", fontSize: "13px" }}>
              By clicking "Sign up" you agree to our
              <span style={{ color: "#007ac6" }}>
                terms of <br /> service{" "}
              </span>
              <span style={{ color: "#007ac6" }}>privacy policy and </span>
              <span style={{ color: "#007ac6" }}>cookie policy.</span>
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "already have an account" : "Don't have an account"}
          <button
            type="button"
            onClick={handleSwitch}
            className="handle-switch-btn"
          >
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;

// 25:34 revise
