import React from "react";
import SideBar from "./component/SideBar";
import Header from "./component/Header";

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Header />
      </div>
    </>
  );
};

export default Home;
