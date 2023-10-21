import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="orao.png"></img>
      </div>
      <div className="endData">
        <h2>Posts</h2>
        <h2>Product</h2>
      </div>
    </div>
  );
}
