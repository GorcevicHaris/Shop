import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { info } = useParams();
  console.log(info);

  return (
    <div style={{ width: "300px", height: "300px", backgroundColor: "red" }}>
      {info}
      <h1>asdasd</h1>
    </div>
  );
}
