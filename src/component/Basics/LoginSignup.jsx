import React, { useState } from 'react'
import "./LoginSignup.css"

import userIcon from './Icons/Personlogo.png'
import eamilIcon from './Icons/Emaillogo.png'
import passwordIcon from './Icons/Passwordlogo.png'
import { json, useNavigate } from 'react-router-dom'
const LoginSignup = () => {
    const [action,setAction] =useState("Sign Up");
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    
    const navigate = useNavigate();

    const validate = ()=>
    {
        let isProceed =true;
        let errmsg = 'Please enter the values ';
        if(action ==="Sign Up")
        {
            if(name === null || name === '')
            {
                isProceed=false;
                errmsg += 'Username';
            }
        }
        
        if(email === null || email === '')
        {
            isProceed=false;
            errmsg += 'Email Id';
        }
        if(password === null || password === '')
        {
            isProceed=false;
            errmsg += 'Password';
        }
        if(!isProceed){
            console.log(errmsg);
        }
        else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {

            }
            else{
                isProceed =false;
                console.log("Please enter valid email id.")
            }
        }
        return isProceed;
    }
    const handleSignup = (e) => {
        e.preventDefault();
        if(validate()){
        
        let register={name,email,password};
        fetch(" http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(register)

        }).then((res)=>{
            console.log("Resistered successfully");
            
// set some message SUCCESSso that the user can know
        }).catch((err)=>{
            console.log("Registration failed.");
        })
    }
}
    const handleLogin = (e) => {
        e.preventDefault();
        if(validate())
        {
            // fetch("http://localhost:8000/user/" + email).then((res) => {
            //     return res.json();
            // }).then((resp) => {
            //     // console.log(resp);
            //     if(Object.keys(resp).length === 0)
            //     {
            //         console.log("Please enter valid EmailId");
            //     }
            //     else{
            //         if(resp.password === password)
            //         {
            //             navigate('/Restaurant');
            //         }
            //         else{
            //             console.log("Please enter valid password");
            //         }
            //     }
                
            // }).catch((err)=>{
            //     console.log("Login Unsuccessfull");
            // })
        }
        
    }

    const handleActionChange = (newAction) =>{
        setName("");
        setEmail("");
        setPassword("");
        setAction(newAction);
    }
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"?<div></div>:<div className="input">
                <img src={userIcon} alt="user icon" />
                <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={eamilIcon} alt="email icon" />
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email ID' />
            </div>
            <div className="input">
                <img src={passwordIcon} alt="password icon" />
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' />
            </div>
        </div>
        {action ==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
        <div className="submit-container">
            <button type="submit" role="signup-button" className={action === "Login"?"submit gray":"submit"} onClick={(e) => {
                    e.preventDefault();
                    handleActionChange("Sign Up");
                    handleSignup(e);
                }}>Sign Up</button>
            <button type="submit" className={action === "Sign Up"?"submit gray":"submit"} onClick={(e) => {
                    e.preventDefault();
                    handleActionChange("Login");
                    handleLogin(e);
                }}>Login</button>
        </div>

        
    </div>
  )
}
export default LoginSignup
