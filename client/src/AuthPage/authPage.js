import React, {useState} from "react";
import { Register } from "./Register";
import { Login } from "./Login";
export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    
    const handleIsAuthPageToggle = () =>{
        setIsLogin((prev)=>{
            return !prev
        })
    }
    return <div>{isLogin ? <Login
        switchAuthHandler= {handleIsAuthPageToggle}
    /> : <Register
        switchAuthHandler= {handleIsAuthPageToggle}
    />}</div>;
}