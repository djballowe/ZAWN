import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <div>
        <h2>Contact Us</h2>
      </div>
      <div className="contact-inputs">
        <form action="">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
          <textarea
            name=""
            id=""
            placeholder="Message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
