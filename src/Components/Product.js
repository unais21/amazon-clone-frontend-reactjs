import React, { useState, useEffect } from "react";
import "../css/Product.css";
import { AddtoBasket } from "../Redux/actions/Action";
import { useDispatch } from "react-redux";

function Product({ productImage, productName, productDesc, productPrice, productIndex }) {

  const dispatch = useDispatch();
 
  const addToBasket = () => {
    let product = { productImage, productName, productDesc, productPrice, productIndex};

    dispatch(AddtoBasket(product))


  };

  // useEffect(() => {
  //   console.log(basket)
  // }, [addToBasket])

  return (
    <div className="productCard">
      <div className="productImageDiv">
        <img src={productImage} alt="" className="productImage" />
      </div>

      <div className="productContainer">
        <h5 className="productName">{productName}</h5>
        <div className="productStars">
          <span className="productStar">&#9733;</span>
          <span className="productStar">&#9733;</span>
          <span className="productStar">&#9733;</span>
          <span className="productStar">&#9733;</span>
        </div>

        <h5 className="productDesc">{productDesc}</h5>

        <h4 className="productPrice">
          {productPrice}
          <small>$</small>
        </h4>

        <div className="basketBtnDiv">
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
