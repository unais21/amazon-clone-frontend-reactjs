import React, { useState,useRef } from "react";
import amazonLogo from "../Images/amazonLogo.png";
import searchImage from "../Images/search.png";
import basketImage from "../Images/basket.png";
import hamburgerImage from "../Images/hamburger.png";
import "../css/Header.css";
import { useSelector, useDispatch } from "react-redux";
import incNumber from "../Redux/actions/Action";
import { Link, useNavigate } from "react-router-dom";
import cookie from 'react-cookies'

const Header = () => {
  const myState = useSelector((state) => state);

  const navRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [basketItems, setbasketItems] = useState();

  return (
    <>
      <nav className="navbar">
          <div className="humBurgerDiv">
               <img onClick={()=>{
                if(navRef.current.className == "nav"){
                    navRef.current.className = "mediaNav" 

                }
                else{
                  navRef.current.className = "nav" 
                }
             
                       
               }}
                 src={hamburgerImage} alt="" srcset="" />
          </div>
        <div className="nav" ref={navRef}>
          <Link to='/'>
            <img className="amazoneLogo" src={amazonLogo} alt="" srcset="" />
          </Link>

          <input type="text" placeholder="Search.." />
          <button onClick={() => dispatch(incNumber(20))}>
            <img src={searchImage} alt="" srcset="" />
          </button>

          <div
           className="navRight"
          >

            {cookie.load("token") == undefined ?
              <Link to="/Login">
                <p className="signInText">
                  Hello, Sign in
                  <br /> <b className="accounTxt">Account & Lists</b>
                </p>
              </Link>

              :

              <Link onClick={() => cookie.remove('token')} to="/">
                <p className="signInText">
                  Hello, Log Out
                  <br /> <b className="accounTxt">Account & Lists</b>
                </p>
              </Link>


            }

            <p className="returnsText">
              Returns
              <br /> <b className="accounTxt">& Orders</b>
            </p>





            <Link to="/ShoppingBasket" className="basketDiv">

              <p className="basketItems">
                {myState == null ? 0 : myState.length}
              </p>
              <img className="basketImage" src={basketImage} alt="" srcset="" />



            </Link>
          </div>
        </div>


      </nav>
      <div className="navbarBottam">
        <img src={hamburgerImage} alt="" srcset="" />
        <h4>All</h4>

        <p>Today's Deal</p>
        <p>Customer Serive</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </>
  );
};

export default Header;
