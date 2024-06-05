import React from 'react';
import Navbar from '../Components/Navbar';

const Header = ({isAuth}) => {
  return (
    <header style={{ textAlign: 'center' }}>
      <h2><i>My Chat App</i></h2>
     <Navbar isAuth={isAuth}/>
    </header>
  );
};

export default Header;
