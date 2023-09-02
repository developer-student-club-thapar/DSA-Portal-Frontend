import {Fragment} from 'react';
import './Leaderboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGear,
  faIdBadge,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

const Leaderboard = () => {
  const tableHeads = [
    'Rank',
    'Profile',
    'User ID',
    'Speed',
    'No.of Questions',
    'Score',
  ];
  return (
    <Fragment>
      <div className="grid grid-cols-5 h-screen text-[#434343]">
        {/* Sidebar Section */}
        <div className="col-span-1 relative z-20 flex flex-col justify-around h-full bg-[url('src/assets/left_background.png')] bg-cover bg-no-repeat">
          <div className="my-[20%] m-4">
            <img src="src/assets/GDSC Logo.svg" className="" />
          </div>
          {/* Sidebar menu */}
          <div className="flex flex-col gap-y-8 bg-transparent px-5 text-xl">
            <a
              href="/dashboard"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faIdBadge} />
              Profile
            </a>
            <a
              href="/leaderboard"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faMedal} />
              Leaderboard
            </a>
            <a
              href="/problems"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faBars} />
              Problems
            </a>
            <a
              href="/settings"
              className="bg-transparent gap-x-4 flex items-center"
            >
              <FontAwesomeIcon icon={faGear} />
              Settings
            </a>
          </div>
          <div className="m-6 bg-transparent">
            <img src="src/assets/Saly.svg" className="bg-transparent" />
          </div>
        </div>
        {/* main content */}
        <div className="bg-white rounded-l-3xl col-span-4 p-4 h-full flex flex-col">
          {/* Avatar and rank bar */}
          <div className=" flex gap-x-2 bg-white">
            <div className="w-[75%] flex bg-[#B5DBFA] rounded-md rounded-tl-3xl p-4">
              {/* Avatar Icon */}
              <div className="border-2 border-white border-solid rounded-full bg-[#e1e1e1] -mx-1 lg:w-[52px] lg:h-[52px] sm:w-[36px] sm:h-[36px]">
                <img
                  src="src/assets/avatar.svg"
                  alt="user avatar"
                  className="bg-transparent"
                />
              </div>
              <div className="ml-6 flex flex-col gap-y-0.25">
                <div className="font-medium text-3xl">Hello, Skai</div>
                <div className="text-lg">Welcome back to the leaderboard</div>
              </div>
            </div>
            <div className="w-[25%] flex flex-col gap-y-2 bg-white">
              <div className="bg-[#B5DBFA] rounded-md p-4 text-center">
                Rank:{' '}
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
          {/* Leaderboard */}
          <div className="mt-4 bg-[#B5DBFA] flex flex-col justify-between rounded-md rounded-bl-3xl drop-shadow-md h-full">
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank, index) => (
                  <tr key={index} className="text-center text-lg">
                    <td className="py-2">{rank}</td>
                    <td className="py-2">
                      <div className="flex gap-x-2 justify-center items-center">
                        <div className="border-2 border-white border-solid rounded-full bg-[#e1e1e1] -mx-1 w-5 h-5">
                          <img
                            src="src/assets/avatar.svg"
                            alt="user avatar"
                            className="bg-transparent"
                          />
                        </div>
                        <div>Skai Lord</div>
                      </div>
                    </td>
                    <td className="py-2">1234567890</td>
                    <td className="py-2">Speed</td>
                    <td className="py-2">1000</td>
                    <td className="py-2">10201</td>
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
                next{' '}
                <img
                  src="src/assets/rightArrow.svg"
                  alt="next arrow"
                  className="bg-transparent ml-2"
                />{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Leaderboard;
