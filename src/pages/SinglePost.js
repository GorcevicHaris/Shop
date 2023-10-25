import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singlepost.css";
import Card from "../components/Card";

export default function SinglePost({}) {
  const { info } = useParams();
  console.log("INFO", info);
  let teno = info.split("").reverse().join("");
  console.log(teno);
  const { state } = useLocation();

  return <div className="Cardcontainer"></div>;
}
