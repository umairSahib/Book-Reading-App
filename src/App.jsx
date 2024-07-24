import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import All from "./component/All";
import BookDetail from "./component/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  return (
    <>
      <div className="flex">
        <SideBar />
        <div>
          <Header />
          <All books={books} setBooks={setBooks} />
        </div>
      </div>
      {/* <BookDetail /> */}
    </>
  );
};

export default App;
