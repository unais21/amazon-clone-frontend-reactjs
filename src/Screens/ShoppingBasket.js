import React, { useEffect,useState } from "react";
import Header from "../Components/Header";
import "../css/ShoppingBasket.css";
import BasketProduct from "../Components/BasketProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ShoppingBasket() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();


  let totlPrice = 0;



  if (state != null) {
    var basketProduct = state.map((item) => {
      totlPrice += item.productPrice;

      return (
        <BasketProduct
          productImage={item.productImage}
          productDesc={item.productDesc}
          productName={item.productName}
          productPrice={item.productPrice}
          productIndex={item.productIndex}
        />
      );
    });
  }

  const CheckOut = ()=>{

    fetch('https://amazon-clone-backend-nodejs.vercel.app/create_paymentIntent',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({totlPrice})
    }).then((res)=>{
        if(res.status == 200){
            res.json().then(data=>{
             navigate('/acceptPayment',{state:{clientSecret:data.client_secret}});
            
     })

        }
        
    }).catch(err=>alert(err.msg));

      
  }

  useEffect(() => {}, []);

  return (
    <div>
      <Header />

        <div className="shoppingBasketCard">
          <h2>Shopping Basket</h2>
          <div className="line"></div>
          {/* <BasketProduct /> */}
          {state != null && state.length != 0
            ? basketProduct
            : "Basket is Empty"}

        </div>

      <div className="checkOutCard">
        <p>
          Sub totl ({state != null && state.length != 0 ? state.length : 0}) Totl price {totlPrice}
          <small>$</small>
        </p>
        <button onClick={CheckOut}>Procced to Checkout</button>
      </div>
      
    </div>
  );
}

export default ShoppingBasket;
