import React from 'react'
import './Login.css'
import logo from '../images/logo.png'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        Axios.post("http://localhost:3001/authUser", { username, password }).then((response) => {
            console.log("User Login");
        });
    };
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} height="400px" width="400px" alt='logo' />
            </div>
            <form id="login-form" action="/authUser" method="post">
                <input
                    type="text"
                    placeholder="Username"
                    className="input-box"
                    id="uname"
                    onChange={(event) => { setUsername(event.target.value) }}
                    required />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-box"
                    id="password"
                    minLength={8}
                    onChange={(event) => { setPassword(event.target.value) }}
                    required />
                <button type="submit" id="login-submit" onClick={loginUser}>Sign In</button>
            </form>

        </div>
    )
}

export default Login