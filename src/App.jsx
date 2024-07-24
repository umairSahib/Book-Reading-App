import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import All from "./component/All";

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
    </>
  );
};

export default App;
