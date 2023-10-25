import React from "react";
import { useParams } from "react-router-dom";
import "./singlepost.css";
export default function SinglePost() {
  const { info } = useParams();
  console.log(info);

  return <div className="Cardcontainer">{info}</div>;
}
