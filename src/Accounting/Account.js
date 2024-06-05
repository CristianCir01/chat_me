import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/Account.css';
export default function Account(){

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
return (
    <div className="account-container">
      <h2>Account Details</h2>
      <p>View and manage your account information here.</p>
      <div className="account-info">
        <p><strong>Name:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};
