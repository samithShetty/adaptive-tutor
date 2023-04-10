import React, {useState} from "react";

export const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password);
    }
    
    return (
        <div className="auth-form-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input value = {username} onChange={(e)=> setUsername(e.target.value)} type="username" placeholder="username" id = "username" name = "username"/>
            <label htmlFor="password">password</label>
            <input value = {password} onChange={(e)=> setPassword(e.target.value)}type="password" placeholder="********" id = "password" name = "password"/>
            <button type="submit">Create Account</button>
        </form>
        <button className="link-btn" onClick = {() => {props.onFormSwitch('login')}}>Already have an account? Log In Here!</button>
      </div>
    )
}