import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const navigate = useNavigate();
   const handleRegister = async() =>{
     if(!name || !email || !password){
      alert("fill up details");
      return
     }
    console.warn(name,email,password);
    let result = await fetch("http://localhost:3000/user" ,{
      method:'post',
      body: JSON.stringify({name,email,password}),
      header:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },

    })
    result = await result.json()
    console.warn(result);

    if(result){
      navigate("/country")
    }

  }



  return(
    
    <>      
    <div className="my-5">
      <h1 className="text-center ">Register Form</h1>

    </div>
    <div className="container ">

      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          
   
  <div className="mb-3">
    <label  className="form-label" >Enter Full Name</label>
    <input type="email" className="form-control"   
    name={name}
    onChange={(e)=>setName(e.target.value)}
    />
    
   
  </div>



  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  
     name={email}
     onChange={(e)=>setEmail(e.target.value)}
     />
   
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" 
    name={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

  </div>
  
  <button type="submit" className="btn btn-outline-primary" onClick={handleRegister}>Register</button>

          
        </div>
      </div>

    </div>
    </>

    

  );
}

export default Register;
