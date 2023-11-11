import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./Signup.css";
import logo from "./Assets/logo.png";
import bg from "./Assets/BG.png";
import kid from "./Assets/Component.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    leetcodeUserName: "",
    password: "",
    leetcodeCookies: "",
    confirmPassword: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.name = formData.fname + formData.lname;
    try {
      const response = await axios.post(
        "http://localhost:1000/api/auth/register",
        formData
      );

      console.log("Response from server:", response.data);

      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);
    }
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email" className="form3 form5">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form"
          onChange={handleInputChange}
        />
        <br />
        <label type="email" className="form3 form6">
          Leetcode Session Id
        </label>
        <br />
        <input
          type="text"
          id="leetcodeCookies"
          name="leetcodeCookies"
          required
          className="form"
          onChange={handleInputChange}
        />
        <br />
        <label type="fname" className="form3 form7">
          Leetcode Username
        </label>
        <br />
        <input
          type="text"
          id="leetcodeUserName"
          name="leetcodeUserName"
          required
          className="form"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="pwd" className="form3 form8">
          Password
        </label>
        <br />
        <input
          type="password"
          id="pwd"
          name="password"
          required
          className="form"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="pwd" className="form3 form9">
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          id="pwd"
          name="confirmPassword"
          required
          className="form form10"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button
          className="inline-block w-full font-larger bg-green-500 hover:bg-green-600 text-grey font-bold py-2.5 border border-green-500 rounded"
          type="submit"
        >
          Create Account
        </button>
        <br />
        <br />
      </form>
      <p className="Login">
        Already have an account?
        <a
          href="./signin"
          className="text-green-500 decoration-green-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 underline"
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
