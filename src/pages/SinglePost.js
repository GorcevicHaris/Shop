import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singlepost.css";
import Card from "../components/Card";

export default function SinglePost({}) {
  const { info } = useParams();
  // console.log("INFO", info);

  // let teno = info.split(",").join("/");
  // console.log(teno);
  const { state } = useLocation();
  const { product } = state;
  return (
    <div className="Cardcontainer">
      <h1>{product.title}</h1>
      <img src={product.images[0]}></img>
    </div>
  );
}
