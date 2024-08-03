import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import "./card.css";

const Cards = () => {
  const { books } = useContext(AppContext);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 md:mt-10 mx-2 md:mx-4 overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 200px)" }}
    >
      {books?.docs?.map((book, index) => (
        <div key={index} className="text-center mb-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text">
              <img
                src={
                  book?.isbn
                    ? `https://covers.openlibrary.org/b/isbn/${book?.isbn[0]}.jpg`
                    : ""
                }
                alt="card"
                className="w-full h-64 rounded-md object-cover image-background"
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
      ))}
    </div>
  );
};

export default Cards;
