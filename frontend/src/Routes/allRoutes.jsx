import React from "react";
import { Route, Routes } from "react-router-dom";
import { Kids } from "../Pages/kids";
import Home from "../Pages/Home";
import Mens from "../Pages/Mens";
import Womens from "../Pages/Womes";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/mens" element={<Mens/>} />
      <Route path="/womens" element={<Womens/>} />
      <Route path="/kids" element={<Kids/>} /> 
    </Routes>
  );
};