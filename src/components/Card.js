import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Card({ product }) {
  const navigate = useNavigate();
  // let image = product.images[0].slice(38).split("/").join(",");
  // console.log(image);
  // const title = product.title.split("/").join(",");
  // console.log(title);
  ///asdasd
  console.log(product);
  return (
    <div
      onClick={() =>
        navigate(`/product/${product.title}`, { state: { product } })
      }
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
