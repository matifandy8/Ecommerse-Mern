import React from "react";
import "./HomeScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Products</h2>
      <input
        className="homescreen__input"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="homescreen__products">
        {loading ? (
          <h2>
            Loading...
            <Loading />
          </h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products
            .filter((product) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
