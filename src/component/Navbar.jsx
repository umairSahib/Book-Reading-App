import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="ml-12 mr-12 pt-12">
        <ul className="flex gap-24">
          <li className="text-gray-500 font-roboto text-base">All</li>
          <li className="text-sky-500 font-roboto text-base">Adventure</li>
          <li className="text-gray-500 font-roboto text-base">Fantasy</li>
          <li className="text-gray-500 font-roboto text-base">Deductive</li>
          <li className="text-gray-500 font-roboto text-base">Pyscology</li>
          <li className="text-gray-500 font-roboto text-base">Business</li>
          <li className="text-gray-500 font-roboto text-base">Horor</li>
          <li className="text-gray-500 font-roboto text-base">Education</li>
        </ul>
        <div className="border border-b-2 border-gray-300 mt-8"></div>
      </nav>
    </>
  );
};

export default Navbar;
