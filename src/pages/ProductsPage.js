import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
function ProductsPage() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https://dummyjson.com/products`)
      .then((data) => console.log(data.data.products));
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main">
      <div className="card"></div>
    </div>
  );
}

export default ProductsPage;
