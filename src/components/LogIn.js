import React from "react";
import Google from "../Images/Payment pngs/google.png";

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-text">
        <h2>Login</h2>
        <p>Please enter your email or password:</p>
      </div>
      <div className="contact-inputs">
        <form action="">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="divider">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>

      <div className="google">
        <button>
          Log in with <img src={Google} alt="" />
        </button>
      </div>

      <div className="new-customer">
        <p>New Customer?</p>
        <a href="">Create an Account</a>
      </div>
    </div>
  );
};

export default LogIn;
