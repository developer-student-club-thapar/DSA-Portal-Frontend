import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "./Assets/logo.png";
import bg from "./Assets/BG.png";
import kid from "./Assets/Component.png";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/leaderboard");
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
        <label type="email" className="form3 form6">
          Leetcode Session Id
        </label>
        <br />
        <input
          type="text"
          id="username"
          name="leetcode"
          required
          className="form"
        />
        <br />
        <label htmlFor="pwd" className="form3 form7">
          Password
        </label>
        <br />
        <input type="password" id="pwd" name="pwd" required className="form" />
        <br />
        <label htmlFor="pwd" className="form3 form8">
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          id="pwd"
          name="pwd"
          required
          className="form form9"
        />
        <br />
        <br />
        <button class="inline-block w-full font-larger bg-green-500 hover:bg-green-600 text-grey font-bold py-2.5 border border-green-500 rounded">
          Create Account
        </button>
        <br />
        <br />
      </form>
      <p className="Login">
        Already have an account?
        <a
          href="./signin"
          class="text-green-500 decoration-green-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 underline"
        >
          Login
        </a>
      </p>

      <img src={logo} alt="" className="Logo" />
      <img src={kid} alt="" className="Kid" />
      <img src={bg} alt="" className="bg" />
    </Fragment>
  );
};
export default Signup;
