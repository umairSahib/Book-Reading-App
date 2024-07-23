import React from "react";
import { useState } from "react";
import All from "./component/All";

const App = () => {
  const [books, setBooks] = useState([]);
  return (
    <>
      <All books={books} setBooks={setBooks} />
    </>
  );
};

export default App;
