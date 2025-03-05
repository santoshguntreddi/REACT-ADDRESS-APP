import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Addresses from "./pages/Addresses";
import Home from "./pages/Home";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/address" Component={Addresses} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
