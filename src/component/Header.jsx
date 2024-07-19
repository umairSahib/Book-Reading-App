import React from "react";

const Header = () => {
  return (
    <div>
      <div className=" pl-8 pr-8 pt-8">
        <nav className="flex justify-between items-center ">
          <div className="flex gap-8 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search a book"
                name="inputName"
                className="pl-8 p-3  bg-gray-100"
              />

              <i className="fa-solid fa-magnifying-glass absolute left-2 top-4 text-gray-400 z-10"></i>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fa-regular fa-bell text-black "></i>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://placehold.co/50x50" alt="logo" />
              <div className="flex items-center gap-2">
                <h2 className="text-base text-black font-roboto">
                  Jack Walter
                </h2>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
