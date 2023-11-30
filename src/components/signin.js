import { Link, useNavigate } from "react-router-dom"
import { baseUrl } from "../utils/api";
import { useRef, useState } from "react";
import axios from 'axios';

export default function Signin(){
  const Signinform = useRef(null)
  const [error,setError]=useState(null);
  const navigate=useNavigate()
//  const 

  const handleSubmit =(e)=>{
   e.preventDefault();
   const data={
       email: Signinform.current.email.value,
       password: Signinform.current.password.value, 
   };
   const registerUrl= baseUrl+"/users/login";
   axios.post(registerUrl,data)
  .then(result=>{
       const {data}=result;
       console.log(data)
       if(data.token){
        const keys=Object.keys(data);
        keys.forEach(e=>localStorage.setItem(e, data[e] ))
        setError(null)
        navigate("/")
       }
       else {
        setError(data)
       }
    }
)
    // console.log(result)
   .catch(err=>console.log(err))
  }
  return(
    <div>

<div>
<Link to={"/signup"} state={{a:1,b:2}}  >Sign Up</Link>
<Link to={"/"}>Home</Link>
<h1>SignIn</h1>
{error && <p>{error.err}</p>}
</div>
<form ref={Signinform} >
        <div>

        <label>Email</label>
        <input name='email' type="email" />
       </div>
        
       <div>
        <label>password</label>
        <input type='password' name="password" />
       </div>
       <button onClick={ (e)=> handleSubmit(e)} >Login</button>
       </form>
    </div>
  )
}