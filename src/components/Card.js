import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Card({ product }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/posts/${product.images[2]}`)}
      className="card"
    >
      <h1>{product.title}</h1>
      <h1>{product.id}</h1>
      <h1>{product.category}</h1>
      <h1>{product.user}</h1>
      <h1>{product.brand}</h1>
      <h1>{product.tags}</h1>
      {/* <h1>{product.images[0]}</h1> */}
    </div>
  );
}
export default Card;
