import React, { useState } from 'react';
import '../Assets/SignUp.css';
import { Link } from 'react-router-dom';
export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Qui puoi aggiungere la logica per gestire la registrazione
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
      
      <button onClick={handleSignUp}>Sign Up</button>
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