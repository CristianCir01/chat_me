import React from 'react';
import '../Assets/Support.css';

const Support = () => {
  const supportEmail = 'exampledev@gmail.com';

  const handleContactSupport = () => {
    window.location.href = `mailto:${supportEmail}`;
  };

  return (
    <div className="support-container">
      <h2>Support</h2>
      <p>If you need assistance, please contact our support team.</p>
      <button onClick={handleContactSupport}>Contact Support</button>
    </div>
  );
};

export default Support;
