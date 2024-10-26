import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowProduct() {
  const [product, showProduct] = useState([]);
  const getProduc0t = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    console.log(response.data);
  };

  useEffect(() => {
    getProduc0t();
  }, []);
  return (
    <div>
      <h1>Show Product</h1>
    </div>
  );
}
