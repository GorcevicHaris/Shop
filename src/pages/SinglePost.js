import React from "react";
import { useLocation } from "react-router-dom";
export default function SinglePost() {
  const { state } = useLocation();
  const [post] = state;
  console.log(post);
  return <div className="PostContainer"></div>;
}
