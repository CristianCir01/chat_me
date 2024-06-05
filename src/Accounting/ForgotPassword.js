import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/ForgotPassword.css';
export default function ForgotPassword(){

  const endpoint = 'http://127.0.0.1:5000'; // URL dell'API

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);
  
  const fetchUser = async () => {
    try {
      // Mock response
       const response = await axios.get(`${endpoint}/users/1`);
      //const response = { data: mockUser };
      setUser(response.data);
    } catch (error) {
      console.error('Errore durante il recupero dell\'utente:', error);
    }
  };
  const sendEmail = async (emailInput) => {
    try {
      if(emailInput!==""){
      await axios.post(`${endpoint}/forgot_password`, {  email:emailInput });
      setEmail('');}
    } catch (error) {
      console.error('Errore durante l\'invio della email:', error);
    }
  };

  const [email, setEmail] = useState('');



  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={()=>sendEmail(email)}>Submit</button>
    </div>
  );
};
