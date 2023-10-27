import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { useState, useEffect, axios } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import SinglePost from "./pages/SinglePost";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/product/:infoo" element={<SingleProduct />} />
        <Route path="/post/:infoooo" element={<SinglePost />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
