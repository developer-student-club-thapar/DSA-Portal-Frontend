import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "./Assets/logo.png";
import bg from "./Assets/BG.png";
import kid from "./Assets/Component.png";

const Signup = () => {

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/leaderboard');
  };

  return (
    <Fragment>
      <h1 className="heading">Create Account</h1>
      <form onSubmit={handleSubmit} className="whole">
        <label htmlFor="fname" className="form3">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          required
          className="form form2"
        />
        <label htmlFor="lname" className="form3 form4">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          required
          className="form form2"
        />
        <br />
        <label htmlFor="email" className="form3 form5">
          Email
        </label>
        <br />
        <input type="email" id="email" name="email" required className="form" />
        <br />
        <label htmlFor="pwd" className="form3 form6">
          Password
        </label>
        <br />
        <input type="password" id="pwd" name="pwd" required className="form" />
        <br />
        <label htmlFor="pwd" className="form3 form7">
          Confirm Password
        </label>
        <br />
        <input type="password" id="pwd" name="pwd" required className="form" />
        <br />
        <input type="submit" value="Create Account" className="Submit"></input>
        <br />
      </form>
      <p className="Login">
      Already have an account? <a href="./signin">Login</a>
      </p>
      
      <img src={logo} alt="" className="Logo" />
      <img src={kid} alt="" className="Kid" />
      <img src={bg} alt="" className="bg" />
      
      
    </Fragment>
  );
};
export default Signup;


