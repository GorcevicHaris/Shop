import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singlepost.css";
import Card from "../components/Card";

export default function SinglePost({}) {
  const { info } = useParams();
  console.log("INFO", info);

  let teno = info.split(",").join("/").slice(1, 7);
  console.log(teno);
  const { state } = useLocation();

  return (
    <div className="Cardcontainer">
      <h1>{teno}</h1>
    </div>
  );
}
