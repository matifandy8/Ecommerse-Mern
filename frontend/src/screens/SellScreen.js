import React from "react";
import { useForm } from "react-hook-form";

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
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <div className="col-sm-12">
        <h3>Client Profile</h3>
      </div>
      <div className="col-sm-12">
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
            <textarea
              className="form-control"
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
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
