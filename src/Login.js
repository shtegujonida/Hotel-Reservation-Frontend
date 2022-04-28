import React from "react"
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (
        
        <div className="head">
            <h1>Sign in</h1>
            <div className="container">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </div>
        </div>
        
    )
}