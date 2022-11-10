import React,{useState} from 'react'
import '../css/Login.css'
import amazonBlackLogo from '../Images/amazonBlackLogo.png'
import { Link,useNavigate } from 'react-router-dom'
import cookie from 'react-cookies'


function Login() {

  

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const navigate = useNavigate();


  const login = ()=>{
    fetch('https://amazon-clone-backend-nodejs.vercel.app/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email:email,password:password})
    }).then((res)=>{
          res.json().then(res=>{
             cookie.save("token",res.token,{path:'/'});
             alert(res.msg)
             if(res.status == 200){
                  navigate('/');
            }
          })
    }).catch(err=>alert(err.msg));
  }

  return (


 <div className='LoginContainer'>
    <img src={amazonBlackLogo} alt="" className="amazonBlackLogo" />

    <div className="LoginCard">
        <h2>Log In</h2>

        <label>Your Email</label>
        
        <input type="email" onChange={(e=>setEmail(e.target.value))} value={email}/>

        
        <label>Password</label>
        <input type="password" onChange={(e=>setPassword(e.target.value))} value={password}/>


        <button onClick={login}>Continue</button>

        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
    </div>
 </div>
  )
}

export default Login