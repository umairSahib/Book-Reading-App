import React from "react";
import RadixComponent from "../../component/RadixComponent";
import SideBar from "../../component/SideBar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <RadixComponent />
      </div>
    </>
  );
};

export default Home;
