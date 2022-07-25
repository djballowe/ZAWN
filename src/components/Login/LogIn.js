import React from "react";

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
      <div className="new-customer">
        <p>New Customer?</p>
        <a href="">Create an Account</a>
      </div>
    </div>
  );
};

export default LogIn;
