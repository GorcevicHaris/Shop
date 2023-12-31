import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import Card from "../components/Card";
import PostCard from "../components/PostCard";

function PostPage() {
  const [data, setData] = useState([]);
  async function getData() {
    axios
      .get(`https://dummyjson.com/posts`)
      .then((data) => setData(data.data.posts));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main">
      {data ? (
        data.map((post) => {
          return <PostCard post={post} />;
        })
      ) : (
        <h1> lorem20 nema</h1>
      )}
    </div>
  );
}

export default PostPage;
