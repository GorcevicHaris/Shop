import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import Card from "../components/Card";

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
  console.log(data);
  return (
    <div className="main">
      {data ? (
        data.map((product) => {
          console.log(product);
          return <Card product={product} />;
        })
      ) : (
        <h1> lorem20 nema</h1>
      )}
    </div>
  );
}

export default PostPage;
