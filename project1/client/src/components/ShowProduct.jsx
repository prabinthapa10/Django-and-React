import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowProduct() {
  const [product, setProduct] = useState([]);
  const getProduc0t = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    setProduct(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getProduc0t();
  }, []);
  return (
    <div>
      <h1>Show Product</h1>
      {product.map((data) => (
        <ul>
          <img src={data.product_image} alt="" />
        </ul>
      ))}
    </div>
  );
}
