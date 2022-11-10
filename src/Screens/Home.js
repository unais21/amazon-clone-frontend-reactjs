import React from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";
import "../css/Home.css";
import homeBack from "../Images/homeBack.jpg";
import shirtImage from "../Images/shirtImage.jfif";
import shirtSecond from "../Images/shirtSecond.jpg";
import shirtThird from "../Images/shirtThird.jpg";
import { useEffect,useState} from "react";
function Home() {

  const [products,setProducts] = useState([]);

  useEffect(() => {
  fetch('https://amazon-clone-backend-nodejs.vercel.app/products').then(res=>{ 
    res.json().then(products=>{
        setProducts(products);
    }).catch(err=>console.log(err))

 }).catch(err=>console.log(err))

    
  }, [])

 

 
  const product = products.map(item=>{
      return <Product key={item.productIndex}
             productImage={item.productImage}
             productName={item.productName}
             productDesc={item.productDesc}
             productPrice={item.productPrice}
             productIndex={item.productIndex}
             />
  })

 

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="homeBackImage"></div>'
      <div className="products">
        {product}
        {/* <Product
          productImage={shirtImage}
          productName="Sozetimes I Talk To Myself Then We Both Laugh and Laugh T-Shirt"
          productDesc="Lightweight, Classic fit, Double-needle sleeve and bottom hem"
          productPrice={29.2}
          productIndex={0}
        />
        <Product
          productImage={shirtSecond}
          productName="Comfort Colors Men's Adult Short Sleeve Tee, Style 1717"
          productDesc="Wish every day could feel like a laid-back Saturday morning? Just"
          productPrice={35.5}
          productIndex={1}
        />
        <Product
          productImage={shirtImage}
          productName="Under Armour Men's Drift Tide 2.0 Short-Sleeve T-Shirt"
          productDesc="Durable stretch-woven fabric is lightweight & comfortable. "
          productPrice={40.2}
          productIndex={2}
        />

<Product
          productImage={shirtImage}
          productName="Sozetimes I Talk To Myself Then We Both Laugh and Laugh T-Shirt"
          productDesc="Lightweight, Classic fit, Double-needle sleeve and bottom hem"
          productPrice={29.2}
          productIndex={0}
        />
        <Product
          productImage={shirtSecond}
          productName="Comfort Colors Men's Adult Short Sleeve Tee, Style 1717"
          productDesc="Wish every day could feel like a laid-back Saturday morning? Just "
          productPrice={35.5}
          productIndex={1}
        />
        <Product
          productImage={shirtImage}
          productName="Under Armour Men's Drift Tide 2.0 Short-Sleeve T-Shirt"
          productDesc="Durable stretch-woven fabric is lightweight & comfortable. "
          productPrice={40.2}
          productIndex={2}
        /> */}



      </div>
    </>
  );
}

export default Home;
