import { Fragment } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import QuestionBar from "../../components/QuestionBar";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <div className="bg-white w-[] px-10">
          <img src="src/assets/GDSC Logo.svg" alt="" className="mt-8" />
          <div className="flex flex-col gap-10 mt-14 px-5 mr-0 justify-center items-center">
            <div className="flex flex-row justify-start gap-[90px]">
              <div className="flex flex-row items-center gap-[50px] justify-center">
                <div className="border-blue-500 border-4 rounded-lg w-[148px] h-[144px]"></div>
                <div className="flex flex-col">
                  <span className="text-2xl">Sakshi Singh</span>
                  <span className="font-bold text-2xl">Akhil123</span>
                  <span className="text-2xl">Rank: 31</span>
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
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-100px w-[500px] items-center"></hr>
          </div>
          <div className="language mt-[40px]">
            <div className="font-bold text-2xl mt-4">Languages</div>
            <div className="flex flex-col mt-4 gap-2 w-32 text-center">
              <div className="border-2 border-[#4285F4] p-4 rounded-3xl">
                C++
              </div>
              <div className="border-2 border-[#4285F4] p-4 rounded-3xl">
                Python
              </div>
            </div>
          </div>
          <div className="justify-center items-center hr my-8 ">
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-100px w-[500px] items-center"></hr>
          </div>
          <div className="language">
            <div className="font-bold text-2xl mt-4">Stats</div>
            <div className="flex flex-col mt-4 gap-6 w-32 text-center">
              <div className="">Total Solved: 35</div>
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
                  Leaderboard
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
            <div className="flex justify-between mt-8 p-4 rounded-xl bg-[#4285F4]">
              <div className="text-white font-semibold text-2xl">Question</div>
              <div className="text-white labels-container font-semibold text-2xl">
                Difficulty
              </div>
              <div className="text-white labels-container font-semibold text-2xl">
                Language
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-16">
              <QuestionBar />
              <QuestionBar />
              <QuestionBar />
              <QuestionBar />
              <QuestionBar />
              <QuestionBar />
              <QuestionBar />
              <QuestionBar />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Dashboard;
