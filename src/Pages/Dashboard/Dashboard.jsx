import { Fragment, useEffect } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import QuestionBar from "../../components/QuestionBar";
import { useContext } from "react";
import { CredentialsContext } from "../../App";
import { Axios } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [credentials] = useContext(CredentialsContext);
  const leetcodeUserName = credentials.leetcodeUserName;
  localStorage.setItem("username", leetcodeUserName);
  const [problems, setProblems] = useState([]);
  const [rank, setRank] = useState(0);
  const [userAvatar, setUserAvatar] = useState("");
  const [totalSolved, setTotalSolved] = useState(0);
  const [language, setLanguage] = useState([]);

  const checkProblems = async () => {
    try {
      console.log("check problems");
      console.log(credentials.token);
      console.log(leetcodeUserName);
      const response = await fetch(
        `http://localhost:1000/api/user/${leetcodeUserName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${credentials.token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProblems(data.solvedProblems);
        setRank(data.rank);
        setUserAvatar(data.userAvatar);
        setTotalSolved(data.totalSubmissions);
        const langs = Array.from(
          new Set(data.solvedProblems.map((p) => p.lang))
        );
        setLanguage(langs);
        console.log(langs);
        console.log(userAvatar);
      } else {
        console.error("Failed to fetch problems data");
      }
    } catch (error) {
      console.error("Error while fetching problems data:", error);
    }
  };

  useEffect(() => {
    checkProblems();
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <div className="bg-white w-[] px-10">
          <img src="src/assets/GDSC Logo.svg" alt="" className="mt-8" />
          <div className="flex flex-col gap-10 mt-14 px-5 mr-0 justify-center items-center">
            <div className="flex flex-row justify-start gap-[90px]">
              <div className="flex flex-row items-center gap-[50px] justify-center">
                <div className="border-blue-500 border-4 rounded-lg w-[148px] h-[144px] flex justify-center items-center p-2">
                  <img src={userAvatar} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl">{credentials.name}</span>
                  <span className="font-bold text-2xl">{leetcodeUserName}</span>
                  <span className="text-2xl">Rank: {rank}</span>
                </div>
              </div>
            </div>
            <div className="justify-center items-center">
              <button className="bg-[#0F9D58] h-[49px] w-[150px] lg:w-[400px] rounded-3xl hover:bg-white border-4 border-[#0F9D58] text-white text-xl hover:text-[#0F9D58]">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="justify-center items-center hr my-8 ">
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-100px w-[500px] items-center"></hr>
          </div>
          <div className="language mt-[40px]">
            <div className="font-bold text-2xl mt-4">Languages</div>
            <div className="flex lg:flex-col mt-4 gap-2 w-32 text-center language-inside">
              {language.map((lang) => {
                return (
                  <div className="border-2 border-[#4285F4] p-4 rounded-3xl">
                    {lang}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="justify-center items-center hr my-8 ">
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-100px w-[500px] items-center"></hr>
          </div>
          <div className="language">
            <div className="font-bold text-2xl mt-4">Stats</div>
            <div className="flex flex-col mt-4 gap-6 w-32 text-center">
              <div className="">Total Solved: {totalSolved}</div>
              <div className="">Sheet Solved: 18</div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div
          className="bg-[url(src/assets/Rect.png)] min-h-screen flex-grow rounded-tl-3xl rounded-bl-3xl"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="leaderboard-buttons">
            <div className="flex flex-row gap-2 md:justify-center md:pl-[60px] xl:justify-end xl:pl-0 pr-8 pt-4 text-center">
              <ul className="flex flex-row gap-8 ">
                <li className="text-[20px] text-white bg-[#EA4335] p-2 rounded-xl w-44 cursor-pointer hover:text-[#EA4335] hover:bg-white">
                  <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="text-[20px] text-white bg-[#0F9D58] p-2 rounded-xl w-44 cursor-pointer hover:text-[#0F9D58] hover:bg-white">
                  Problems
                </li>
                <li className="text-[20px] text-white bg-[#4285F4] p-2 rounded-xl w-44 cursor-pointer hover:text-[#4285F4] hover:bg-white">
                  Profile
                </li>
                <li className="text-[20px] p-2 text-[#1b1b1b] w-[42px] rounded-xl cursor-pointer hover:text-white">
                  <FontAwesomeIcon icon={faGear} className="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-[100px] ml-[100px] mr-20">
            <div className="text-[36px] font-bold">Problems Solved</div>
            <div className="flex justify-between text-center mt-8 p-4 rounded-xl bg-[#4285F4]">
              <div className="text-black text-xl" style={{ flex: "2" }}>
                Questions
              </div>
              <div
                className="text-black labels-container text-xl"
                style={{ flex: "1" }}
              >
                Difficulty
              </div>
              <div
                className="text-black labels-container text-xl"
                style={{ flex: "1" }}
              >
                Language
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-16">
              {problems.map((problem) => {
                return (
                  <QuestionBar
                    key={problem._id}
                    question={problem.title}
                    difficulty={problem.difficulty}
                    language={problem.lang}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Dashboard;
