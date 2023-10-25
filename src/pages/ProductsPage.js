import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import Card from "../components/Card";

function ProductsPage() {
  const [data, setData] = useState([]);
  async function getData() {
    axios
      .get(`https://dummyjson.com/products`)
      .then((data) => setData(data.data.products));
  }
  useEffect(() => {
    getData();
  }, []);
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

export default ProductsPage;
