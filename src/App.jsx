import React, { useState } from "react";
import Header from "./component/Header";
import All from "./component/All";
import { Routes, Route, Outlet } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";
import SideBar from "./component/SideBar";

const Main = ({ books, setBooks }) => <All books={books} setBooks={setBooks} />;

const App = () => {
  const [books, setBooks] = useState([]);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <div className="w-full ">
            <Header />
          </div>
          <Routes>
            <Route
              path="/"
              element={<Main books={books} setBooks={setBooks} />}
            />
            <Route path="/myBook/:id" element={<BookDetails />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
