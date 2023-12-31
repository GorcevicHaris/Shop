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
          <h1 style={{ fontWeight: "450", color: "white" }}>Products</h1>
        </Link>
        <Link to={"/posts"} style={{ textDecoration: "none", color: "black" }}>
          <h1 style={{ fontWeight: "450", color: "white" }}>Posts</h1>
        </Link>
      </div>
    </div>
  );
}
