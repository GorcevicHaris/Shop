import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singleproduct.css";
function SinglePost() {
  // const { info } = useParams();
  // console.log("INFO", info);

  // let teno = info.split(",").join("/");
  // console.log(teno);
  const { state } = useLocation();
  console.log(state);
  const { post } = state;
  console.log(post, "post");
  return (
    <div className="Cardcontainer">
      <div className="fullPage">
        <div className="data">
          <h5>{post?.title}</h5>
          <h2>{post.body}</h2>
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
