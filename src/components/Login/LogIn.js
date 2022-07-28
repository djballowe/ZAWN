import React, { useState } from "react";
import Google from "../Images/Payment pngs/google.png";
import { useNavigate } from "react-router-dom";
import { createWithEmail, signInWithGoogle, signInWithEmail } from "../../firebase/Config";
import { auth } from "../../firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import AccountPage from "./AccountPage";

const LogIn = () => {
  const [user] = useAuthState(auth);
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setIsEmail(e.target.value);
    } else {
      setIsPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail(isEmail, isPassword);
  };

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  if (user) {
    return <AccountPage />;
  } else {
    return (
      <div className="login-container">
        <div className="login-text">
          <h2>Login</h2>
          <p>Please enter your email or password:</p>
        </div>
        <div className="contact-inputs">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="divider">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="google">
          <button onClick={signInWithGoogle}>
            Log in with <img src={Google} alt="" />
          </button>
        </div>
        <div className="new-customer">
          <p>New Customer?</p>
          <p onClick={handleClick}>Create an Account</p>
        </div>
      </div>
    );
  }
};

export const Register = () => {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState("");
  const [user] = useAuthState(auth);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setIsEmail(e.target.value);
    } else if (e.target.id === "password") {
      setIsPassword(e.target.value);
    } else if (e.target.id === "confirm-password") {
      setIsConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isConfirmPassword !== isPassword) {
      alert("Passwords must match");
    } else if (isPassword.length < 8) {
      alert("Password must be at least 8 characters");
    } else {
      createWithEmail(isEmail, isPassword);
    }
  };
  if (user) {
    return <AccountPage />;
  } else
    return (
      <div className="login-container">
        <div className="login-text">
          <h2>Register</h2>
          <p>Please fill in the fields below:</p>
        </div>
        <div className="contact-inputs">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              id="first-name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              id="last-name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              onChange={handleChange}
              required
            />
            <button type="submit">Create Account</button>
          </form>
        </div>
        <div className="divider">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="google">
          <button
            onClick={() => {
              navigate("/account");
            }}
          >
            Sign up with <img src={Google} alt="" />
          </button>
        </div>
        <div className="new-customer">
          <p>Already have an account?</p>
          <p onClick={handleClick}>Log in</p>
        </div>
      </div>
    );
};

export default LogIn;
