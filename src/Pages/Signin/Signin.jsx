import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/logo.c36eaf5e6.svg";
import "./Signin.css";
import Footer from "../../components/footer";

const Signin = () => {
  useEffect(() => {
    document.title = "Account Login - LeetCode";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form-div">
          <img src={logo} alt="" />
          <form onSubmit={handleSubmit}>
            <input
              className="email"
              placeholder="Username or E-mail"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            <input
              className="password"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />{" "}
            <br />
            <button className="sign-in-btn" type="submit">
              {" "}
              Sign In
            </button>
          </form>
          <div className="others">
            <a href="forgot-password">Forgot Password?</a>
            <a href="signup">Sign Up</a>
          </div>
          <div className="sign-in-with">
            <p>or you can sign in with</p>
            <div className="social-media-icons">
              <a className="google">
                <i class="fa-brands fa-google"></i>
              </a>
              <a className="github">
                <i class="fa-brands fa-github"></i>
              </a>
              <a className="facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a className="sign-in-others">
                <i class="fa-light fa-circle-ellipsis"></i>
              </a>
            </div>
          </div>
          <div className="para">
            <p>This site is protected by reCAPTCHA and the Google <br /> <a href="privacy">Privacy Policy</a> and <a href="">Terms of Service</a> apply.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
