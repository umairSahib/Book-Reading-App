import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ books }) => {
  console.log("🚀 ~ books:", books);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-10 mx-2 md:mx-4">
        {books?.docs?.map((book, index) => {
          return (
            <div className="flex flex-col text-center" key={index}>
              <div className="bg-white rounded-lg border p-4">
                <div className="text">
                  <img
                    src={
                      book?.isbn
                        ? `https://covers.openlibrary.org/b/isbn/${book?.isbn[0]}.jpg`
                        : ""
                    }
                    alt="card"
                    className="w-full h-48 rounded-md object-cover"
                  />

                  <Link to={`/myBook/${book.id}`}>
                    <h2 className="font-roboto text-lg font-bold whitespace-pre mt-2 truncate">
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
