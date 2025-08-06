import React from "react";
import Home from "./Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Search from "./Component/Search/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:input" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
