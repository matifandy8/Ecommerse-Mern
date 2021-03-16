import React from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

import "./SellScreen.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

export default function SellScreen() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>
    Axios({
      method: "POST",
      data: {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        price: data.price,
        countInStock: data.countInStock,
      },
      url: "http://localhost:5000/products",
    }).then((res) => alert(res.data));

  return (
    <div className="container">
      <div className="col-sm-12">
        <h1>Sell</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="name"
              name="name"
              ref={register({ required: true, maxLength: 20 })}
            />
            {errors.name &&
              errors.name.type === "required" &&
              errorMessage(required)}
            {errors.name &&
              errors.name.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="url"
              placeholder="imageUrl"
              name="imageUrl"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Description"
              name="description"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Price"
              name="price"
              ref={register({ maxLength: 12 })}
            />
            {errors.price &&
              errors.price.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="countInStock"
              name="countInStock"
              ref={register({ required: true })}
            />
            {errors.countInStock &&
              errors.countInStock.type === "required" &&
              errorMessage(required)}
          </div>

          <div className="form-group">
            <input className="btn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
