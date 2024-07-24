import React from "react";

const BookDetail = () => {
  return (
    <>
      <div className="bg-[#F0F2FA] pl-10 pr-10 pt-8">
        <nav className="flex gap-40">
          <div>
            <i className="fa-solid fa-arrow-left-long text-gray-300 font-Roboto"></i>{" "}
          </div>
          <div className="flex gap-4">
            <div className="text-[#C3C4CA] font-Roboto">Home</div>
            <div className="text-[#C3C4CA] font-Roboto">/</div>
            <div className="text-[#C3C4CA] font-Roboto">Fantasy</div>
            <div className="text-[#C3C4CA] font-Roboto">/</div>
            <div className="text-[#C3C4CA] font-Roboto">
              The Fellowship of the Ring
            </div>
          </div>
        </nav>

        <div className="bg-white mt-12 ml-12 mr-12">
          <div className="relative ">
            <img src="https://placehold.co/300x400" alt="placeholder" />
          </div>
          <div className="flex gap-2 pt-4 pl-4">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
          </div>

          <h1 className=" text-xl font-semibold font-Roboto mt-6 pl-4">
            The Fellowship of the Ring
          </h1>
          <div className="flex  gap-10 mt-4 pl-4">
            <div>
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-pager text-[#C3C4CA]"></i>
                <h2 className="text-[#C3C4CA] text-base font-medium ">Pages</h2>
              </div>
              <div>
                <h3 className="font-Roboto text-lg font-semibold flex justify-center">
                  1265
                </h3>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-pen text-[#C3C4CA]"></i>
                <h2 className="text-[#C3C4CA] text-base font-medium">Author</h2>
              </div>
              <div>
                <h3 className="font-Roboto text-lg font-semibold flex justify-center">
                  J.R.R Tolkien
                </h3>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <i className="fa-regular fa-id-card text-[#C3C4CA]"></i>
                <h2 className="text-[#C3C4CA] text-base font-medium">Genre</h2>
              </div>
              <div>
                <h3 className="font-Roboto text-lg font-semibold flex justify-center ">
                  Fantasy
                </h3>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[#C3C4CA] font-Roboto text-base text-medium pt-8 pl-4">
              Overview
            </h2>
          </div>
          <div className=" pt-2 pl-4">
            <h3 className="font-semibold font-Roboto text-base ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            </h3>
            <div className="flex items-center gap-4 mt-8 pb-20">
              <button className="bg-[#1F86FF] pl-16 pt-2 pb-2 pr-16 text-white font-Roboto text-base font-medium">
                Start Reading
              </button>
              <button className="bg-[#FEF5EF] pl-4 rounded-lg pt-1 pb-1 pr-4 text-white font-Roboto text-base font-medium">
                <i className="fa-solid fa-heart text-red-600 text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
