import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowProduct from "./components/ShowProduct";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

export default function () {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/show" element={<ShowProduct />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
