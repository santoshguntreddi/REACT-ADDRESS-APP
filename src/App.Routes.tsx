import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Addresses from "./pages/Addresses";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/address" />} />
        <Route path="/address" Component={Addresses} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
