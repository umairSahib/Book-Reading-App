import React, { useContext } from "react";
import Cards from "./Cards";
import RadixComponent from "./RadixComponent";
import { AppContext } from "../context";

const All = () => {
  const { handleSubmit } = useContext(AppContext);

  return (
    <>
      <RadixComponent />
      <div className="flex justify-between ml-12 mr-12 pt-12 items-center ">
        <div>
          <h1 className="text-black font-roboto text-lg font-semibold">
            12.745 Book listed
          </h1>
          <h2 className="text-gray-500 font-roboto text-sm">
            You can use the filters to find the books you like faster
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="flex gap-4 items-center bg-gray-200 p-2 rounded-lg">
            <h1 className="text-gray-400 font-roboto text-base">Filter</h1>
            <i className="fas fa-filter text-gray-500"></i>
          </button>
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="inputName"
                placeholder="Search Book"
                className="p-2 pl-8 border bg-gray-200 rounded-lg"
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass text-lg text-gray-400 absolute top-2 right-3"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default All;
