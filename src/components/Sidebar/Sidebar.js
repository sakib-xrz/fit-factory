import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import avatar from "./../../avatar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../../manageLocalStorage";

const Sidebar = ({ exerciseTime, breakTime, handleBreakTime }) => {
  const [localTime, setLocalTime] = useState([]);

  useEffect(() => {
    const storedTime = getFromLocalStorage();
    setLocalTime(storedTime.time);
  }, [breakTime]);

  let totalExerciseTime = 0;
  for (const time of exerciseTime) {
    totalExerciseTime = totalExerciseTime + time;
  }
  const notify = () =>
    toast.success("Successfully Completed", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="p-5 sticky top-0">
      {/* About Me  */}
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="pl-3">
          <h3 className="text-lg font-medium">Md Sakibul Islam</h3>
          <p className="text-gray-500">Mirpur,Dhaka</p>
        </div>
      </div>
      {/* My Info  */}
      <div>
        <div className="flex justify-center bg-base-100 px-8 py-4 rounded-lg mt-8">
          <div className="flex justify-between w-full">
            <div className="text-center">
              <h2 className="text-2xl font-medium">
                65
                <small className="text-gray-500 font-normal text-sm">kg</small>
              </h2>
              <p className="text-gray-700">Weight</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-medium">5.6</h2>
              <p className="text-gray-700">Height</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-medium">
                24
                <small className="text-gray-500 font-normal text-sm">yrs</small>
              </h2>
              <p className="text-gray-700">Age</p>
            </div>
          </div>
        </div>
      </div>
      {/* Break  */}
      <h2 className="text-2xl font-medium px-2 pt-5 pb-2">Add a Break</h2>
      <div className="flex justify-center bg-base-100 py-4 rounded-lg ">
        <div className="flex justify-evenly flex-row w-full">
          <div>
            <button
              onClick={() => {
                handleBreakTime("20");
                addToLocalStorage("20");
              }}
              className="btn rounded-full bg-white border-0 text-black hover:bg-primary hover:text-white"
            >
              20
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleBreakTime("30");
                addToLocalStorage("30");
              }}
              className="btn rounded-full bg-white border-0 text-black hover:bg-primary hover:text-white"
            >
              30
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleBreakTime("40");
                addToLocalStorage("40");
              }}
              className="btn rounded-full bg-white border-0 text-black hover:bg-primary hover:text-white"
            >
              40
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleBreakTime("50");
                addToLocalStorage("50");
              }}
              className="btn rounded-full bg-white border-0 text-black hover:bg-primary hover:text-white"
            >
              50
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-medium px-2 pt-5 pb-2 ">Exercise Details</h2>
      <div className="flex justify-center bg-base-100 py-4 rounded-lg">
        <div className="flex justify-between items-center w-full px-3">
          <div className="text-xl font-medium">Exercise time</div>
          <div className="text-gray-500 font-normal">
            {totalExerciseTime} seconds
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-base-100 py-4 rounded-lg mt-5">
        <div className="flex justify-between items-center w-full px-3">
          <div className="text-xl font-medium">Break time</div>
          <div className="text-gray-500 font-normal">
            {localTime ? localTime : 0} seconds
          </div>
        </div>
      </div>
      <button onClick={notify} className="btn btn-primary w-full mt-5">
        Activity Completed
      </button>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default Sidebar;
