import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="navBar">
      <div className="logo">
        <Link to={"/"}>
          <img src="orao.png"></img>
        </Link>
      </div>
      <div className="endData">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/products"}
        >
          <h1 style={{ fontWeight: "450" }}>Products</h1>
        </Link>
        <h2>Product</h2>
      </div>
    </div>
  );
}
