import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const addProduct = async () => {
    let formfield = new FormData();

    formfield.append("product_name", name);
    formfield.append("product_price", price);
    formfield.append(" product_description", desc);
    formfield.append(" product_category", category);
    formfield.append("product_image", image);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/",
      data: formfield,
    }).then((response) => {
      console.log(response.data);
      navigate("/show");
    });
  };

  return (
    <div>
      <h1>ADdProduct</h1>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="file"
        placeholder="enter your image"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={addProduct}>asdf</button>
    </div>
  );
}
