import React,{useState} from 'react'
import '../css/SignUp.css'
import amazonBlackLogo from '../Images/amazonBlackLogo.png'
import { Link } from 'react-router-dom'


function SignUp() {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [cpassword,setCpassword] = useState();



  const signup = ()=>{

    fetch('http://localhost:5050/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:name,email:email,password:password,cpassword:cpassword})
    }).then((res)=>{
          res.json().then(v=>{
           
            alert(v.msg);
          })
    }).catch(err=>alert(err.msg));
  }

  return (
    <div className='signUpContainer'>
        <img src={amazonBlackLogo} alt="" className="amazonBlackLogo" />

        <div className="signUpCard">
            <h2>Create Account</h2>

            <label>Your Name</label>
            <input type="text" placeholder='First Name and Last Name'  onChange={(e=>setName(e.target.value))} value={name}/>

            <label>Your Email</label>
            <input type="email"  onChange={(e=>setEmail(e.target.value))} value={email}/>

            
            <label>Password</label>
            <input type="password" onChange={(e=>setPassword(e.target.value))} value={password}/>

                   
            <label>Re-enter Password</label>
            <input type="password" onChange={(e=>setCpassword(e.target.value))} value={cpassword}/>

            <button onClick={signup}>Continue</button>

            <p>already have an account? <Link to="/Login">Log In</Link></p>
        </div>
    </div>
  )
}

export default SignUp