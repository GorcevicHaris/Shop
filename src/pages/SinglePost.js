import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singlepost.css";
import Card from "../components/Card";

export default function SinglePost({}) {
  // const { info } = useParams();
  // console.log("INFO", info);

  // let teno = info.split(",").join("/");
  // console.log(teno);
  const { state } = useLocation();
  const { product } = state;
  return (
    <div className="Cardcontainer">
      <div className="fullPage">
        <div className="imgDiv">
          <img
            style={{
              width: "100%",
              height: "100%",
              padding: "0",
            }}
            src={product.images[0]}
          ></img>
        </div>
        <div className="data">
          <h1 style={{ fontSize: "50px", fontWeight: "300" }}>
            {product.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
