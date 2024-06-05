import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({ isAuth}) => {


  return (
    <li>
      {isAuth ? (
        <Link to="/account" style={{ textDecoration: "none" }}>
          <button
            style={{
              background:"white",
              color: "black",
              textDecoration: "none",
              display: "block",
              margin: "10px 0",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Account
          </button>
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button
            style={{
                background:"white",
                color: "black",
                textDecoration: "none",
                display: "block",
                margin: "10px 0",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
          >
            Login
          </button>
        </Link>
      )}
    </li>
  );
};

export default NavbarItem;
