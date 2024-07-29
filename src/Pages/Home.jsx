import React from "react";
import Cards from "../component/Cards";
import All from "../component/All";

const Home = ({ books }) => {
  return (
    <div>
      <Cards books={books} />
    </div>
  );
};

export default Home;
