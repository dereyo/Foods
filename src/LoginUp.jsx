import React, { useState } from 'react'
import './LoginUp.css'
import { assets } from './assets/frontend_assets/assets'

const LoginUp = ({setShowLogin}) => {
    const [currState , setCurrState] = useState("Login")
  return (
    <div className='login-up'>
        <form  className="login-up-container">
            <div className="login-title">
                <h2> {currState} </h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email'required />
                <input type="password" placeholder='Password'required />
            </div>
            <button>{currState==="Sing Up"?"Create account ":'Login'}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a New Account ?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have an Account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            } 
        </form>
    </div>
  )
}

export default LoginUp