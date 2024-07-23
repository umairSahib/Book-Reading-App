import React from "react";

const All = () => {
  return (
    <div>
      <div className="flex justify-between ml-12 mr-12 pt-12 items-center">
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
            <i class="fas fa-filter text-gray-500"></i>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Book"
              className="p-2 pl-8 border bg-gray-200 rounded-lg"
            />
            <button>
              <i className="fa-solid fa-magnifying-glass text-lg text-gray-400 absolute top-2 right-3"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex ml-12 mr-12 mt-10 gap-4">
        <div className="">
          <div className="flex-col  text-center">
            <img src="https://placehold.co/180x200" alt="card" />
            <h1 className="font-roboto text-lg font-bold whitespace-pre mt-2">
              The Vanishing Half
            </h1>
            <h2 className="text-gray-400 font-roboto font-semibold mt-1 text-sm">
              Brit Bennet
            </h2>
            <div className="flex gap-2 mt-2 justify-center">
              <i className="fa fa-star text-amber-500"></i>
              <i className="fa fa-star text-amber-500"></i>
              <i className="fa fa-star text-amber-500"></i>
              <i className="fa fa-star text-amber-500"></i>
              <i className="fa fa-star text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
