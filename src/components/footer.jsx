import React from "react";
// import indianFlag from "../assets/png-transparent-round-orange-white-and-green-flag-of-indian-art-flag-of-india-computer-icons-national-flag-indian-flag-blue-flag-orange.png"
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section-2">
        <section style={{color: "#556E7B"}}>Copyright &copy; 2023 LeetCode </section>
        <section className="footer-links">
          <a href="help-center">help-center</a> | <a href="jobs">jobs</a> |{" "}
          <a href="bug-bounty">bug-bounty</a> |{" "}
          <a href="online-interview">online-interview</a> |{" "}
          <a href="students">students</a> | <a href="terms">terms</a> |{" "}
          <a href="privacy-policy">privacy-policy</a>
        </section>
      </div>
      <a href="region"> {/* <img src={indianFlag} alt="" /> */}India</a>
    </div>
  );
};

export default Footer;
