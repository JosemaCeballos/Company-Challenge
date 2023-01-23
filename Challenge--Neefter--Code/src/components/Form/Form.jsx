import React, { useState } from "react";
import UploadImages from "../UploadImages/UploadImages.jsx";
import "./Form.css";
import { options } from "./utils.js";

function Form() {
  const initialValue = {
    name: "",
    description: "",
    image: "",
  };
  const [nftCreate, setNftCreate] = useState(initialValue);

  const handleChange = (e) => {
    setNftCreate({
      ...nftCreate,
      [e.target.name]: e.target.value,
    });
  };

  function catchImage(image) {
    setNftCreate({ ...nftCreate, image: image });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://staging.crossmint.com/api/2022-06-09/collections/default-solana/nfts",
      options(nftCreate)
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="center-form">
      <section id="content-form">
        <h1 className="subheader">Create your NFT:</h1>
        <form onSubmit={handleSubmit} className="mid-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} />
            <label>Description:</label>
            <input type="text" name="description" onChange={handleChange} />
            <UploadImages catchImage={catchImage} />
            <div className="clearfix"></div>
            <input
              type="submit"
              value="create"
              onChange={handleChange}
              className="btn btn-success"
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
