import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/Account.css';
export default function Account({id}){

  const endpoint = 'http://127.0.0.1:5000'; // URL dell'API

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);
  
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${endpoint}/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Errore durante il recupero dell\'utente:', error);
    }
  };
return (
    <div className="account-container">
      <h2>Account Details</h2>
      <p>View and manage your account information here.</p>
      <div className="account-info">
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Password:</strong> {user?.password}</p>
      </div>
    </div>
  );
};
