import React, {useState} from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import './authPage.css'; 

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    
    const handleIsAuthPageToggle = () =>{
        setIsLogin((prev)=>{
            return !prev
        })
    }
    return <div className="auth-container">
        {isLogin ? <Login
            switchAuthHandler= {handleIsAuthPageToggle}
        /> : <Register
            switchAuthHandler= {handleIsAuthPageToggle}
        />}
    </div>;
}