import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ books }) => {
  console.log("🚀 ~ books:", books);
  return (
    <>
      <div className="grid grid-cols-3 mt-10 ml-4 mr-4 ">
        {books?.docs?.map((book, index) => {
          // console.log("🚀 ~ {books?.docs?.map ~ book:", book, "book");

          return (
            <div className="  flex flex-col text-center " key={index}>
              <div className="bg-white rounded-lg border p-4">
                <div className="text">
                  <img
                    src={
                      book?.isbn
                        ? `https://covers.openlibrary.org/b/isbn/${book?.isbn[0]}.jpg`
                        : ""
                    }
                    alt="card "
                    className="w-full h-48 rounded-md object-cover"
                  />

                  <Link to={`/myBook/${book.id}`}>
                    <h2 className="font-roboto text-lg font-bold whitespace-pre mt-2">
                      {book.title}
                    </h2>
                  </Link>
                  <h3 className="text-[#C3C4CA] font-roboto font-semibold mt-1 text-sm">
                    {book?.author_name?.[0]}
                  </h3>
                </div>
                <div className="flex gap-2 mt-2 justify-center">
                  <i className="fa fa-star text-amber-500"></i>
                  <i className="fa fa-star text-amber-500"></i>
                  <i className="fa fa-star text-amber-500"></i>
                  <i className="fa fa-star text-amber-500"></i>
                  <i className="fa fa-star text-gray-300"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
