import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { handleSubmit, books } = useContext(AppContext);
  const [data, setData] = useState({});
  console.log("🚀 ~ BookDetails ~ data:", data);
  const { id } = useParams();

  useEffect(() => {
    const data = books.docs.filter((value) => {
      return value.id == id;
    });
    setData(data[0]);
  }, []);
  console.log("🚀 ~ useEffect ~ data: mydata", data);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#F0F2FA] pl-4 pr-4 pt-8 ">
        <nav className="flex gap-10">
          <div>
            <button onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left-long text-gray-300 font-Roboto"></i>
            </button>
          </div>
          <div className="flex gap-4">
            <div className="text-[#C3C4CA] font-Roboto">Home</div>
            <div className="text-[#C3C4CA] font-Roboto">/</div>
            <div className="text-[#C3C4CA] font-Roboto">Fantasy</div>
            <div className="text-[#C3C4CA] font-Roboto">/</div>
            <div className="text-[#C3C4CA] font-Roboto">{data.title}</div>
          </div>
        </nav>

        <div className="bg-white mt-12 ml-32 mr-12 flex  relative">
          <div className=" absolute -left-24 top-10">
            <img
              className="w-60 h-auto"
              src={
                data?.isbn
                  ? `https://covers.openlibrary.org/b/isbn/${data?.isbn[0]}.jpg`
                  : ""
              }
              alt="placeholder"
            />
          </div>
          <div className="pl-48 pr-10 pt-10">
            <div className="flex gap-2 pt-4 pl-4">
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </div>

            <h1 className=" text-xl font-semibold font-Roboto mt-6 pl-4">
              {data.title}
            </h1>
            <div className="flex  gap-10 mt-4 pl-4">
              <div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-pager text-[#C3C4CA]"></i>
                  <h2 className="text-[#C3C4CA] text-base font-medium ">
                    Pages
                  </h2>
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
                  <h2 className="text-[#C3C4CA] text-base font-medium">
                    Author
                  </h2>
                </div>
                <div>
                  <h3 className="font-Roboto text-lg font-semibold flex justify-center">
                    {data.author_name}
                  </h3>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <i className="fa-regular fa-id-card text-[#C3C4CA]"></i>
                  <h2 className="text-[#C3C4CA] text-base font-medium">
                    Genre
                  </h2>
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
              <h3 className="font-normal font-Roboto text-base max-w-xl  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                eligendi voluptatibus consequuntur totam quasi voluptates
                <br />
                adipisci molestias labore asperiores voluptas quo magni officia
                ab, quia, possimus debitis, ipsum tempore aut iusto voluptatum
                nam dolore. Necessitatibus velit doloribus voluptatum amet
                cumque maiores omnis eos doloremque, molestias debitis!
                <br />
                Aspernatur, fugit animi ad alias earum facere cumque accusamus a
                rem similique pariatur! Asperiores nesciunt aliquam ea voluptas
                qui natus corporis aperiam inventore. Esse ab dolores dolor
                maxime sint obcaecati, dicta velit atque? Libero!
              </h3>
              <div className="flex items-center gap-4 mt-8 pb-2">
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
      </div>
    </>
  );
};

export default BookDetails;
