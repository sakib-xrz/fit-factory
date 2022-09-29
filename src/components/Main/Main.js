import React, { useEffect, useState } from "react";
import "./Main.css";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [workouts, setWorkouts] = useState([]);
  const [list, setList] = useState([]);

  const handleAddToList = (workout) => {
    const newList = [...list, workout];
    setList(newList);
  };

  useEffect(() => {
    fetch("work-out.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9 first-half mx-auto">
          <Header></Header>
          <h1 className="text-2xl font-semibold uppercase text-center pt-7 px-10">
            Commit to be fit
          </h1>
          <div className="card-group grid grid-cols-1 gap-10 p-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {workouts.map(
              (workout) =>
                (workout = (
                  <Card
                    key={workout.id}
                    workout={workout}
                    handleAddToList={handleAddToList}
                  ></Card>
                ))
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 second-half bg-white">
          <Sidebar seconds={list}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Main;
