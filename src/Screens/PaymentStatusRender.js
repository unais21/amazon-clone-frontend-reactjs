import React from "react";
import PaymentStatus from "./PaymentStatus";

function PaymentStatusRender(){
  const { PaymentStatusImg,PaymentStatusMsg } =  PaymentStatus();

  alert(PaymentStatusMsg)
  return (
    <div > 
      <div className='PaymentStatusContainer'>
      <h2 >Payment Status</h2>
      <div className='PaymentStatusCard'>
        <img src={PaymentStatusImg} alt="" srcset="" />
        <h3>{PaymentStatusMsg}</h3>
        <button>Back</button>
      </div>

      </div>
    
    </div>
 )

}

export default PaymentStatusRender