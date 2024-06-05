import React from 'react';
import '../Assets/Account.css';
export default function Account() 
{
return (
    <div className="account-container">
      <h2>Account Details</h2>
      <p>View and manage your account information here.</p>
      <div className="account-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Membership Level:</strong> Premium</p>
      </div>
    </div>
  );
};
