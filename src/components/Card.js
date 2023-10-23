import React from "react";
import "./header.css";
export default function Card({ product }) {
  return (
    <div className="card">
      <h1>{product.title}</h1>
      <h1>{product.id}</h1>
      <h1>{product.category}</h1>
      <h1>{product.user}</h1>
      <h1>{product.brand}</h1>
      <h1>{product.tags}</h1>
    </div>
  );
}
