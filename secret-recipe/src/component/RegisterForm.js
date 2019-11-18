import React, { useState } from "react";

function RegisterForm() {
  const [user, setUser] = useState({ name: "", email:"", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.email);
    console.log(user.password);
  };

  return (
    <div className="RegisterForm">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter your email here"
            onChange={event => handleChange(event)}
          />
          </label>
          <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="Enter your password here"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default RegisterForm;
