import React, { useState } from 'react';
import '../Assets/Login.css';
import { Link } from 'react-router-dom';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Qui puoi aggiungere la logica per gestire il login
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
           <div style={{textAlign:"right", padding:"1px"}}>
      <i>Forgot Password? </i>
            <Link style={{color:"black"}} to={"/ForgotPassword"}>Here</Link>
         </div>
      <button onClick={handleLogin}>Login</button>
      <div>
      <i>Not Signed yet? Join Us!</i>
      <button
           
            style={{
                background:"#333333",
                color: "white",
                textDecoration: "none",
                display: "block",
                margin: "10px auto",
                padding: "8px 16px",
                width:"30%",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
          >
            <Link style={{color:"white"}} to={"/Signup"}>SignUp</Link>
          </button></div>
    </div>
  );
};

