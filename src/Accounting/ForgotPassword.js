import React, { useState } from 'react';
import '../Assets/ForgotPassword.css';
export default function ForgotPassword() 
{


  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Qui puoi aggiungere la logica per gestire il recupero della password
    console.log('Email:', email);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Submit</button>
    </div>
  );
};
