import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CredentialsContext } from "../../App";
import { useContext } from "react";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [check, setCheck] = useState(false);
  const [, setCredentials] = useContext(CredentialsContext);

  const handleLogin = async () => {
    await axios
      .post("http://localhost:3000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          const token = res.data;
          const modifiedToken = token.split(" ");
          setToken(modifiedToken[1]);
          setCredentials(modifiedToken[1]);
          if (check) {
            localStorage.setItem("token", modifiedToken[1]);
          }
        }
      })
      .then(() => {
        navigate("/leaderboard");
      })
      .catch((err) => {
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="min-h-screen bg-[#C7E4FC] flex sm:flex-row flex-col">
      <div
        className="bg-[url(src/assets/left_background.png)] w-[300px] p-2 pr-0 sm:pr-2 sm:w-[350px]"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img src="src/assets/GDSC Logo.svg" alt="" className="mt-4" />
        <img
          src="src/assets/Component.png"
          alt=""
          className="absolute invisible sm:visible lg:w-[430px] lg:h-[650px] lg:top-[15px] md:w-[350px] md:h-[550px] md:top-[15px] sm:w-[300px] sm:h-[450px] sm:top-[15px] w-[250px] h-[350px] top-[15px]"
        />
      </div>
      <div className="bg-white flex-grow rounded-tl-3xl rounded-bl-3xl flex items-center justify-center">
        <div className="flex flex-col gap-[36px] justify-evenly w-[75%] h-3/5">
          <div className="text-[42px] text-[#434343] font-bold">Sign in</div>
          <div className="flex flex-col w-[100%] gap-[36px]">
            <div className="relative">
              <input
                type="text"
                className="border-[0.5px] border-[#434343] rounded-[8px] w-[100%] h-[50px] px-[20px] py-[10px] xl:w-[80%]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-[#434343] absolute top-[-20px] left-[15px] bg-white mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">
                Email
              </div>
            </div>
            <div className="relative">
              <input
                type="password"
                className="border-[0.5px] border-[#434343] rounded-[8px] w-[100%] h-[50px] px-[20px] py-[10px] xl:w-[80%]"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-[#434343] absolute top-[-20px] left-[15px] bg-white mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">
                Password
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="bg-[#81C784] font-bold rounded-[5px] w-[100%] h-[50px] hover:bg-[#3D1540] text-[#434343] xl:w-[80%] hover:text-white"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
          <div className="flex justify-between text-[16px] flex-col text-center gap-1 lg:flex-row xl:w-[80%]">
            <div className="flex gap-1 text-center items-center justify-center lg:items-stretch lg:justify-start">
              <input
                type="checkbox"
                name="loggedIn"
                id=""
                onChange={() => setCheck(!check)}
              />
              <label htmlFor="loggedIn" className="text-[#737373]">
                Keep me logged in
              </label>
            </div>
            <div>
              <a href="" className="text-[#737373]">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="text-[16px]">
            <span className="text-[#737373]">
              Don't have an account?{" "}
              <span className="text-[#81C784]">
                <Link to=".." relative="path">
                  Create Account
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
