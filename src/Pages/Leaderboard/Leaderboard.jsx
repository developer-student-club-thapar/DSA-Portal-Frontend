import { Fragment, useContext, useEffect, useState } from "react";
import "./Leaderboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faIdBadge,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CredentialsContext } from "../../App";

const LeaderboardCard = () => {
  const [credentials] = useContext(CredentialsContext);

  return (
    <div className="w-full bg-[#B5DBFA] hover:drop-shadow-sm rounded-md flex justify-between p-4 sm:text-sm text-xs">
      <div className="flex gap-x-4 items-center">
        <div className="border-2 border-white border-solid rounded-full bg-[#e1e1e1] -mx-1 w-10 h-10">
          <img
            src="src/assets/avatar.svg"
            alt="user avatar"
            className="bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-y-0.5">
          <div className="underline">Rank #1</div>
          <div>Skai Lord</div>
          <div>User ID</div>
        </div>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <div className="">Speed: 100</div>
        <div className="">No.of Questions: 1000</div>
        <div className="">Score: 10201</div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const tableHeads = ["Rank", "Profile", "No.of Questions"];

  const [credentials] = useContext(CredentialsContext);
  const [leaderboard, setLeaderboard] = useState([]);

  const getLeaderboard = async () => {
    try {
      const response = await fetch(`http://localhost:1000/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${credentials.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const LB = data.map((user) => {
          return {
            leetcodeUserName: user.leetcodeUserName,
            solvedProblems: data[0].solvedProblems,
            problemsCount: user.solvedProblems.length,
          };
        });
        console.log(LB);
        const sortLB = LB.sort((a, b) => b.problemsCount - a.problemsCount);
        setLeaderboard(sortLB);
        console.log(leaderboard);
      } else {
        console.error("Failed to fetch leaderboard data");
      }
    } catch (error) {
      console.error("Error while fetching leaderboard data:", error);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <Fragment>
      <div className="md:grid flex flex-col grid-cols-5 h-screen text-[#434343]">
        {/* Sidebar Section laptop view */}
        <div className="md:flex hidden col-span-1 relative z-20 flex-col justify-around h-full bg-[url('src/assets/left_background.png')] bg-cover bg-no-repeat">
          <div className="my-[20%] m-4">
            <img src="src/assets/GDSC Logo.svg" className="" />
          </div>
          {/* Sidebar menu */}
          <div className="flex flex-col gap-y-8 bg-transparent px-5 text-xl">
            <Link
              to="/dashboard"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faBars} />
              Profile
            </Link>
            <Link
              to="/leaderboard"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faMedal} />
              Leaderboard
            </Link>
            <Link
              to="/problems"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faBars} />
              Problems
            </Link>
            <Link
              to="/settings"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faGear} />
              Settings
            </Link>
          </div>
          <div className="m-6 bg-transparent">
            <img src="src/assets/Saly.svg" className="bg-transparent" />
          </div>
        </div>
        {/* Sidebar Section tablet and mobile view */}
        <div className="md:hidden flex flex-col gap-y-4 justify-between p-4">
          <div className="w-[30%]">
            <img src="src/assets/GDSC Logo.svg" className="" />
          </div>
          {/* Sidebar menu */}
          <div className="flex gap-x-4 bg-transparent sm:text-base text-xs">
            <Link
              to="/dashboard"
              className="bg-transparent sm:gap-x-4 gap-x-1 flex items-center"
            >
              <FontAwesomeIcon icon={faIdBadge} className="sm:w-auto w-3" />
              Profile
            </Link>
            <Link
              to="/leaderboard"
              className="bg-transparent sm:gap-x-4 gap-x-1 flex items-center"
            >
              <FontAwesomeIcon icon={faMedal} className="sm:w-auto w-3" />
              Leaderboard
            </Link>
            <Link
              to="/problems"
              className="bg-transparent sm:gap-x-4 gap-x-1 flex items-center"
            >
              <FontAwesomeIcon icon={faBars} className="sm:w-auto w-3" />
              Problems
            </Link>
            <Link
              to="/settings"
              className="bg-transparent sm:gap-x-4 gap-x-1 flex items-center"
            >
              <FontAwesomeIcon icon={faGear} className="sm:w-auto w-3" />
              Settings
            </Link>
          </div>
        </div>
        {/* main content */}
        <div className="bg-white md:rounded-l-3xl rounded-3xl col-span-4 p-4 h-max flex flex-col">
          {/* Avatar and rank bar */}
          <div className=" flex gap-x-2 bg-white">
            <div className="w-[75%] flex bg-[#B5DBFA] rounded-md rounded-tl-3xl p-4">
              {/* Avatar Icon */}
              <div className="border-2 border-white border-solid rounded-full bg-[#e1e1e1] -mx-1 lg:w-[52px] lg:h-[52px] sm:w-[36px] sm:h-[36px] w-8 h-8">
                <img
                  src="src/assets/avatar.svg"
                  alt="user avatar"
                  className="bg-transparent"
                />
              </div>
              <div className="ml-6 flex flex-col gap-y-0.25">
                <div className="font-medium md:text-3xl sm:text-xl text-lg">
                  Hello, {credentials.name}
                </div>
                <div className="md:text-lg sm:text-base text-sm">
                  Welcome back to the leaderboard
                </div>
              </div>
            </div>
            <div className="w-[25%] flex flex-col gap-y-2 bg-white">
              <div className="bg-[#B5DBFA] rounded-md md:rounded-tr-md rounded-tr-3xl p-4 text-center">
                Rank:{" "}
                <span className="bg-[#66BB6A] lg:text-xl text-white rounded-full px-2 py-1">
                  #1
                </span>
              </div>
              <div className="bg-[#B5DBFA] rounded-md flex justify-evenly lg:text-base md:text-sm text-xs">
                <button className="lg:p-4 p-2 rounded-md focus:bg-[#87b9f8]">
                  Week
                </button>
                <button className="lg:p-4 p-2 rounded-md focus:bg-[#87b9f8]">
                  Month
                </button>
                <button className="lg:p-4 p-2 rounded-md focus:bg-[#87b9f8]">
                  All Time
                </button>
              </div>
            </div>
          </div>
          {/* Leaderboard laptop view*/}
          <div className="md:flex hidden mt-4 bg-[#B5DBFA] flex-col justify-between rounded-md rounded-bl-3xl drop-shadow-md h-full">
            <table className="rounded-md rounded-bl-3xl w-full">
              <thead className="bg-[#94b4cd]">
                <tr className="bg-transparent w-full">
                  {tableHeads.map((heading, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="py-4 text-lg bg-transparent font-bold text-center first:rounded-l-md last:rounded-r-md"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {leaderboard.map((user, index) => (
                  <tr key={index} className="text-center text-lg">
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">
                      <div className="flex gap-x-2 justify-center items-center">
                        <div className="border-2 border-white border-solid rounded-full bg-[#e1e1e1] -mx-1 w-5 h-5">
                          <img
                            src="src/assets/avatar.svg"
                            alt="user avatar"
                            className="bg-transparent"
                          />
                        </div>
                        <div>{user.leetcodeUserName}</div>
                      </div>
                    </td>
                    <td className="py-2">{user.problemsCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex w-full justify-between items-center my-4 px-4">
              <button className="hover:bg-[#87b9f8] p-2 font-medium flex items-center rounded-md">
                <img
                  src="src/assets/leftArrow.svg"
                  alt="back arrow"
                  className="bg-transparent mr-2"
                />
                back
              </button>
              <div>Page 1 of 10</div>
              <button className="hover:bg-[#87b9f8] p-2 font-medium flex items-center rounded-md">
                next{" "}
                <img
                  src="src/assets/rightArrow.svg"
                  alt="next arrow"
                  className="bg-transparent ml-2"
                />{" "}
              </button>
            </div>
          </div>
          {/* Leaderboard mobile view */}
          <div className="md:hidden flex flex-col gap-y-2 my-4 bg-white h-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank, index) => (
              <LeaderboardCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Leaderboard;
