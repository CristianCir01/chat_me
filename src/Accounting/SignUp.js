import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/SignUp.css';
import { Link } from 'react-router-dom';
export default function SignUp() {

  const endpoint = 'http://127.0.0.1:5000'; // URL dell'API

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const addUser = async (email,password,username) => {
    try {
      if(email!==""){
      await axios.post(`${endpoint}/register`, 
      {   "username": username,
      "password": password,
      "email": email});
      setEmail('');}
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="username"
        placeholder="Esername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      
      <button onClick={()=> addUser(email,password,username)}>Sign Up</button>
      <div>
      <i>Already registered? Login</i>
      <button
           
            style={{
                background:"#333333",
                color: "white",
                textDecoration: "none",
                display: "block",
                margin: "10px auto",
                padding: "8px 16px",
                border: "none",
                width:"30%",
                borderRadius: "4px",
                cursor: "pointer",
              }}
          >
            <Link style={{color:"white"}} to={"/Login"}>Login</Link>
          </button></div>
    </div>
  );
};