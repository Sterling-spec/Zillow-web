import React, { useState } from "react";
import "./App.css";
import { useAuth } from "../context/AuthContext";


function FormsFirebase() {
    const auth = useAuth()
    const [emailRegister, serEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        auth.register(emailRegister, passwordRegister)
    }
    return(
        <div className="App">
            <div className="form">
                <h3 className="title">Register</h3>
                <input onChange={()=> serEmailRegister(e.target.value)} className="input" type="email" />
                <input onChange={()=> setPasswordRegister(e.target.value)} className="input" type="password" />
                <button onClick={(e)=> handleRegister(e)}className="button">Submit</button>
            </div>
            <div className="form">
                <h3 className="title">Register</h3>
                <input className="input" type="email" />
                <input className="input" type="password" />
                <button className="button">Submit</button>
                <button className="button">Google</button>
            </div>
            <button className="button">Logout</button>
        </div>
    );
}

export default FormsFirebase;