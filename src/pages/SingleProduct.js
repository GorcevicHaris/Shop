import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singleproduct.css";
export default function SingleProduct() {
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
            src={product?.thumbnail}
          ></img>
        </div>
        <div className="data">
          <h5>{product?.title}</h5>
          <h2>Description: {product?.description}</h2>
          <h2>Ocena: {product?.rating}</h2>
          <h2>category: {product?.category}</h2>
          <h2>Cena: {product?.price}</h2>
          <h2>Cenaaaa: {product?.id}</h2>
        </div>
      </div>
    </div>
  );
}
