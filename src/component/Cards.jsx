import React from "react";

const Cards = ({ books }) => {
  return (
    <>
      <div className="grid grid-cols-3 ">
        {books?.docs?.map((book, index) => {
          console.log("🚀 ~ {books?.docs?.map ~ book:", book, "book");

          return (
            <div className=" items-center grid " key={index}>
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
                  {/* <Link to={`/Book/${book.id}`}>*/}
                  {/* <Link to={`/myBook/${book.id}`}> */}
                  <h2 className="text-[#000000] pt-4 pl-5 font-semibold text-lg">
                    {book.title}
                  </h2>
                  {/* </Link> */}
                  <h3 className="text-[#cf8383] pt-2 pl-5 font-semibold text-sm">
                    {book?.author_name?.[0]}
                  </h3>
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

// {
//   books?.docs?.map((book, index) => {
//     console.log("🚀 ~ {books?.docs?.map ~ book:", book, "book");

//     return (
//       <div className=" items-center grid " key={index}>
//         <div className="bg-white rounded-lg border p-4">
//           <div className="text">
//             <img
//               src={
//                 book?.isbn
//                   ? `https://covers.openlibrary.org/b/isbn/${book?.isbn[0]}.jpg`
//                   : ""
//               }
//               alt="card "
//               className="w-full h-48 rounded-md object-cover"
//             />
//             {/* <Link to={`/Book/${book.id}`}>*/}
//             <Link to={`/myBook/${book.id}`}>
//               <h2 className="text-[#000000] pt-4 pl-5 font-semibold text-lg">
//                 {book.title}
//               </h2>
//             </Link>
//             <h3 className="text-[#cf8383] pt-2 pl-5 font-semibold text-sm">
//               {book?.author_name?.[0]}
//             </h3>
//           </div>
//         </div>
//       </div>
//     );
//   });
// }

// {
/* <div className="flex ml-12 mr-12 mt-10 gap-4">
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
</div>; */
// }
