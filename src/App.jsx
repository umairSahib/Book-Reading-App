import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import All from "./component/All";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";

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
      <Routes>
        <Route path="/myBook/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
};

export default App;
