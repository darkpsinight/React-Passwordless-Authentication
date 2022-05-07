import React, { useState } from 'react'
import Axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const login = () => {
        Axios.post("http://localhost:3002/login", { email }).then(() => {
            console.log("ok");
        });
    };


    return (
        <div>
            <div className='formContainer'>
                <div className="title">
                    <h1>Sign Up</h1>
                </div>
                <div className='body'>
                    <p>Enter your email to sign up:</p>
                    <input type="email" placeholder='Email...' onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login