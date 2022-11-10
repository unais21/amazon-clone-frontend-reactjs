import Home from "./Screens/Home";
import Login from "./Screens/Login";
import ShoppingBasket from "./Screens/ShoppingBasket";
import SignUp from "./Screens/SignUp";
import PaymentStatus from "./Screens/PaymentStatus";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import cookie from 'react-cookies'
import Payment from "./Screens/CheckOut";

import Header from "./Components/Header";
// import PaymentStatusRender from "./Screens/PaymentStatusRender";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {cookie.load('token') == undefined ? 
            <>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/Login" element={<Login/>}/>
            </> : '' 
           
        }
  
        <Route path="/ShoppingBasket" element={<ShoppingBasket/>}/>
        <Route path="/acceptPayment" element={<Payment/>}/>
        <Route path="/payment_status" element={<PaymentStatus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
