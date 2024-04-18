import React, { useState } from "react";
import './CSS/Login.css';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFocus = (e) => {
    e.target.previousElementSibling.classList.add("glowIcon");
  };

  const handleBlur = (e) => {
    e.target.previousElementSibling.classList.remove("glowIcon");
  };

  const handleLogin = () => {
    if (password.length < 6) {
      Swal.fire({
        
        title: "Oops...",
        text: "Password should have at least 6 characters!",
      });
    } else if (!email.includes("@")) {
      Swal.fire({
        
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
    } else {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
      }).then(() => {
        
        window.location.href = "/";
      });
    }
  };

  return (
    <div className="container-fluid login_form_container">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6 login_form">
          <h2>Login</h2>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="input_text"
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="email"
              placeholder="Enter your email"
              className="input_text"
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              className="input_text"
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button_group" id="login_button">
            <button type="button" onClick={handleLogin}>
              Submit
            </button>
          </div>
          <div className="fotter">
            <a>Forgot Password?</a>
           <a href="">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
