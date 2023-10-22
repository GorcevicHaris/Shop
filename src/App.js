import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { useState, useEffect, axios } from "react";
import Card from "./components/Card";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="posts" element={<PostPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
