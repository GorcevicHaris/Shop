import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
function PostCard({ post }) {
  const navigate = useNavigate();
  // let image = post.images[0].slice(38).split("/").join(",");
  // console.log(image);
  // const title = post.title.split("/").join(",");
  // console.log(title);
  console.log(post);
  return (
    <div
      onClick={() => navigate(`/post/${post.id}`, { statePost: { post } })}
      className="card"
    >
      <h1>{post.body}</h1>
      {/* <h1>{posts.images[0]}</h1> */}
    </div>
  );
}
export default PostCard;
