import React from "react";
import { useLocation } from "react-router-dom";
export default function SinglePost() {
  const { statePost } = useLocation();
  const { post } = statePost;
  console.log(post);
  return (
    <div className="PostContainer">
      <h1>{post.body}</h1>
    </div>
  );
}
