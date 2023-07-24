import {Fragment} from 'react';
import './Signup.css';
import logo from "./Assets/logo.png";
import bg from "./Assets/BG.png";
import kid from "./Assets/Component.png";

const Signup = () => {
  return (
    <Fragment>
      <h1 className='heading'>Create Account</h1>
      <img src={logo} alt="" className="Logo" />
      <img src={bg} alt="" className="bg" />
      <img src={kid} alt="" className="Kid" />
    </Fragment>
  );
};
export default Signup;
