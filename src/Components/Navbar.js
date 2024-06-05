import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem'; // Assicurati di importare correttamente il componente NavbarItem
import "../Assets/Navbar.css";

const Navbar = ({isAuth}) => {
  return (
    <nav>
      <ul>
        <NavbarItem isAuth={isAuth} />
        {isAuth && <li>
        <Link to="/chat_me" style={{ textDecoration: "none" }}>
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
            Chat
          </button>
        </Link>
        </li>}
        <li>
        <Link to="/support" style={{ textDecoration: "none" }}>
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
           Support
          </button>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;