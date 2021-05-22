import React from 'react';
import Link from 'react-router-dom'
import LogoAfya from '../../assets/img/logo.png'

const Navbar: React.FC = () => {
  return (
      <nav>
         <img src={LogoAfya} alt="logo da Afya" />
        <Link to="/">Home</Link>
        <Link to="/criar-conta">Inscreva-se</Link>
        <Link to="/login">Login</Link>
      </nav>
  );
}

export default Navbar;
