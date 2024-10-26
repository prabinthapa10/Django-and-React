import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState("");

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    setProductDetail(data);
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      <div>{productDetail.product_name}</div>
    </div>
  );
}
