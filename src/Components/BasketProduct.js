import React, { useState, useEffect } from "react";
import "../css/BasketProduct.css";
import { RemoveFromBasket } from '../Redux/actions/Action'
import { useDispatch } from "react-redux";

function BasketProduct({
  productImage,
  productName,
  productDesc,
  productPrice,
  productIndex
}) {
  // const [basket, setBasket] = useState([]);

  const dispatch = useDispatch();

  const removeFromBasket = ()=>{
      dispatch(RemoveFromBasket(productIndex));
  }

 

  return (
    <div className="BasketproductCard">
      <div className="BasketproductImageDiv">
        <img src={productImage} alt="" className="BasketproductImage" />
      </div>

      <div className="BasketproductContainer">
        
        <div className="BasketProductInfo">
          <h5 className="BasketproductName">{productName}</h5>
          <div className="BasketproductStars">
            <span className="productStar">&#9733;</span>
            <span className="productStar">&#9733;</span>
            <span className="productStar">&#9733;</span>
            <span className="productStar">&#9733;</span>
          </div>

          <h5 className="BasketproductDesc">{productDesc}</h5>

          <h4 className="BasketproductPrice">
            {productPrice}
            <small>$</small>
          </h4>
        </div>

        <div className="BasketproductBtnDiv">
          <button onClick={removeFromBasket}>Remove Product</button>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;
