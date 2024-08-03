import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="sidebar pl-4 w-48 h-full  bg-[#192336]">
        <div className="pt-12">
          <img className="w-40 h-12" src="./images/logo1.jpg" alt="logo" />
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa fa-house text-white"></i>
          <h2 className="text-white font-roboto text-base  active:text-white">
            <a href="">Home</a>
          </h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa-solid fa-fire-flame-curved text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base active:text-white hover:text-white">
            <a href=""> Popular</a>
          </h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa-regular fa-bookmark text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base active:text-white hover:text-white">
            <a href="">My Library</a>
          </h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa-regular fa-heart text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base active:text-white hover:text-white">
            <a href="">Favourite</a>
          </h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa fa-crown text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base whitespace-pre active:text-white hover:text-white">
            <a href="">VIP Subscriptions</a>
          </h2>
        </div>
        <div className="border border-b-1 border-gray-500 pl-4 mr-8 mt-8 "></div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa fa-gear text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base active:text-white hover:text-white">
            <a href="">Settings</a>
          </h2>
        </div>
        <div className="flex items-center gap-2 pt-8 ">
          <i className="fa fa-circle-info text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base active:text-white hover:text-white">
            <a href="">Help</a>
          </h2>
        </div>
        <div className="flex items-center gap-2 pt-8 pb-14 ">
          <i className="fa fa-right-from-bracket text-[#6D748D] hover:text-white"></i>
          <h2 className="text-[#6D748D] font-roboto text-base active:text-white hover:text-white">
            <a href="">Logout</a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SideBar;
