import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div onClick={} className="postCard">
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>

    </div>
  );
}
