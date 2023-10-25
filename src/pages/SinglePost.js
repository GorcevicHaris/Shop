import React from "react";
import { useParams } from "react-router-dom";
import "./singlepost.css";
import Card from "../components/Card";

export default function SinglePost({}) {
  const { info } = useParams();
  console.log(info);

  return (
    <div className="Cardcontainer">
      <img src={info}></img>
    </div>
  );
}
