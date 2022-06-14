import React from 'react'
import './Register.css'
import logo from '../images/logo.png'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        Axios.post("http://localhost:3001/newUser", { email, username, password }).then((response) => {
            console.log("User Created");
        });
    };
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} height="400px" width="400px" alt='logo' />
            </div>
            <form id="register-form" action="/newuser" method="post">
                <input
                    type="email"
                    placeholder="Email"
                    className="input-box"
                    id="email"
                    onChange={(event) => { setEmail(event.target.value) }}
                    required
                />
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
                <button type="submit" id="register-submit" onClick={createUser}>Create Account</button>
            </form>

        </div>
    )
}

export default Register