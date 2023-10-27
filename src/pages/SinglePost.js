import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singleproduct.css";
export default function SinglePost() {
  // const { info } = useParams();
  // console.log("INFO", info);

  // let teno = info.split(",").join("/");
  // console.log(teno);
  const { statePost } = useLocation();
  console.log(statePost);
  const { post } = statePost;
  console.log(post, "post");
  return (
    <div className="Cardcontainer">
      <div className="fullPage">
        <div className="data">
          <h5>{post?.title}</h5>
        </div>
      </div>
    </div>
  );
}
