import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { info } = useParams();
  console.log(info);

  return <div>{info}</div>;
}
