import { Link } from "react-router-dom"
import { baseUrl } from "../utils/api";
import { useRef } from "react";
import axios from 'axios';


export default function Signup (){
    const formRef = useRef(null)
    const handleRegister =(e)=>{
        e.preventDefault()
        const data={
            name:formRef.current.name.value,
            email: formRef.current.email.value,
            password: formRef.current.password.value,
            phone:formRef.current.phone.value,
            access:formRef.current.access.value,
        };
        const registerUrl= baseUrl+"/users/register"
        // fetch(registerUrl,{
        //     method:"POST",
        //     headers:{
        //         "content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res=>res.json())
        // .then(result=>console.log(result))
        // .catch(err=>console.log(err))
       
        ////axios post request
        axios.post(registerUrl,data)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))


    }
    return(
      <div>
        <Link to={"/signin"} >Signin</Link>
          <form ref={formRef} >

         <h1>Register form</h1>

         <div>
          <label>Name</label>
          <input  name='name' type="text"/>
         </div>

         <div>
          <label>Email</label>
          <input name='email' type="email" />
         </div>
          
         <div>
          <label>password</label>
          <input type='password' name="password" />
         </div>

         <div>
          <label>Phone No</label>
          <input name="phone" type="text" />
          </div>

       
         <div>
          <label>access</label>
          <input type="access" name="access" />
         </div>

         <button onClick={ (e)=> handleRegister(e)} >Register</button>
        

        </form>
      </div>
    )
  }