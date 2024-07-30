import React, { useState } from "react";
import Header from "./component/Header";
import All from "./component/All";
import { Routes, Route, Outlet } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";
import SideBar from "./component/SideBar";
import { AppContext } from "./context";

const Main = () => {
  return (
    <>
      <Header />
      <All />
    </>
  );
};

const App = () => {
  const [books, setBooks] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${inputValue}&fields=key,title,author_name,isbn&limit=20&page=1`
    );
    const data = await response.json();
    console.log("🚀 ~ handleSubmit ~ data:", data);
    const addId = data.docs.map((item, index) => {
      item.id = index + 1;
      return item;
    });
    console.log("🚀 ~ addId ~ addId:", addId);

    setBooks(data);
  }
  return (
    <>
      <AppContext.Provider value={{ name: "umair", books, handleSubmit }}>
        <div className="flex flex-col md:flex-row">
          <SideBar className="md:w-1/4" />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/myBook/:id" element={<BookDetails />} />
            </Routes>
            <Outlet />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
